import { Component, ViewChild, OnInit } from '@angular/core';
import { Room, LocalTrack, LocalVideoTrack, LocalAudioTrack, RemoteParticipant } from 'twilio-video';
import { RoomsComponent } from '../rooms/rooms.component';
import { CameraComponent } from '../camera/camera.component';
import { SettingsComponent } from '../settings/settings.component';
import { ParticipantsComponent } from '../participants/participants.component';
import { VideoChatService } from '../../services/videochat.service';

@Component({
    selector: 'app-conference',
    styleUrls: ['./conference.component.scss'],
    templateUrl: './conference.component.html',
})
export class ConferenceComponent implements OnInit {
    @ViewChild('rooms', { static: false }) rooms: RoomsComponent;
    @ViewChild('camera', { static: false }) camera: CameraComponent;
    @ViewChild('settings', { static: false }) settings: SettingsComponent;
    @ViewChild('participants', { static: false }) participants: ParticipantsComponent;

    activeRoom: Room;


    constructor(
        private readonly videoChatService: VideoChatService) { }

    async ngOnInit() {
       
    }

    async onSettingsChanged(deviceInfo: MediaDeviceInfo) {
        await this.camera.initializePreview(deviceInfo);
    }

    async onLeaveRoom(_: boolean) {
        if (this.activeRoom) {
            this.activeRoom.disconnect();
            this.activeRoom = null;
        }

        this.camera.finalizePreview();
        const videoDevice = this.settings.hidePreviewCamera();
        this.camera.initializePreview(videoDevice);

        this.participants.clear();
    }

    async onRoomChanged(roomName: string) {
        if (roomName) {
            if (this.activeRoom) {
                this.activeRoom.disconnect();
            }

            this.camera.finalizePreview();
            const tracks = await this.settings.showPreviewCamera();

            this.activeRoom =
                await this.videoChatService
                          .joinOrCreateRoom(roomName, tracks);

            this.participants.initialize(this.activeRoom.participants);
            this.registerRoomEvents();

        }
    }

    onParticipantsChanged(_: boolean) {
        this.videoChatService.nudge();
    }

    private registerRoomEvents() {
        this.activeRoom
            .on('disconnected',
                (room: Room) => room.localParticipant.tracks.forEach(publication => this.detachLocalTrack(publication.track)))
            .on('participantConnected',
                (participant: RemoteParticipant) => this.participants.add(participant))
            .on('participantDisconnected',
                (participant: RemoteParticipant) => this.participants.remove(participant))
            .on('dominantSpeakerChanged',
                (dominantSpeaker: RemoteParticipant) => this.participants.loudest(dominantSpeaker));
    }

    private detachLocalTrack(track: LocalTrack) {
        if (this.isDetachable(track)) {
            track.detach().forEach(el => el.remove());
        }
    }

    private isDetachable(track: LocalTrack): track is LocalAudioTrack | LocalVideoTrack {
        return !!track
            && ((track as LocalAudioTrack).detach !== undefined
            || (track as LocalVideoTrack).detach !== undefined);
    }
}