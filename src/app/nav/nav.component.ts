import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HelpModalComponent } from '../modals/help-modal/help-modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  url: string = '';
  isOn: boolean = false;

  constructor(router: Router, public dialog: MatDialog) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

  openHelpModal() {
    const dialogRef = this.dialog.open(HelpModalComponent, {
      width: '400px',
      data: { question: 'Deseja solicitar ajuda de um especialista?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'ok') {
        this.isOn = true;
      } else {
        this.isOn = false;
      }
    });
  }
}
