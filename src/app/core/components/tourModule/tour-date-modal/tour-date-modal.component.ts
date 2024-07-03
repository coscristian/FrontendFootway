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
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: 'dialog-overview-example.html',
//   styleUrls: ['dialog-overview-example.css'],
// })
// export class DialogOverviewExample {

//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }

// }

