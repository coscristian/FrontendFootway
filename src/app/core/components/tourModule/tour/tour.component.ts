import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TourInfoPickerComponent } from '../tour-info-picker/tour-info-picker.component';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})
export class TourComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log("Helo");
    const dialogRef = this.dialog.open(TourInfoPickerComponent, {      
      panelClass: 'tour-info-picker-dialog'
      // width: '100%'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
