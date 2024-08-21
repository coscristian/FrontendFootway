import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TourInfoPickerComponent } from '../tour-info-picker/tour-info-picker.component';


@Component({
  selector: 'app-tour-date-modal',
  templateUrl: './tour-date-modal.component.html',
  styleUrl: './tour-date-modal.component.scss'
})
export class TourDateModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TourInfoPickerComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

