import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tour-info-picker',
  templateUrl: './tour-info-picker.component.html',
  styleUrl: './tour-info-picker.component.scss',
})
export class TourInfoPickerComponent {
  constructor(
    public dialogRef: MatDialogRef<TourInfoPickerComponent>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
