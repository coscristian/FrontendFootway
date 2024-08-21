import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TouristPersonalDataComponent } from '../tourist-personal-data/tourist-personal-data.component';

@Component({
  selector: 'app-tour-info-picker',
  templateUrl: './tour-info-picker.component.html',
  styleUrl: './tour-info-picker.component.scss',
})
export class TourInfoPickerComponent{
  selectedDate: string | undefined;

  @ViewChild('calendar', { static: false }) calendar!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<TourInfoPickerComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public tourId: number
    ) {}

  ngAfterViewInit() {
    this.setupCalendar();
  }

  setupCalendar() {
    const calendar = this.calendar.nativeElement;

    calendar.addEventListener('change', (e: any) => {
      this.selectedDate = e.target.value;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onNextClick(): void {
    const bookingData = {
      tourDate: this.selectedDate,
      tourId: this.tourId
    };

    this.dialogRef.close();

    const dialogRef = this.dialog.open(TouristPersonalDataComponent, {
      width: '500px',
      panelClass: 'tour-info-picker-dialog',
      data: bookingData 
    });
  }
}
