import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss'
})
export class SuccessModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SuccessModalComponent>) { }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
