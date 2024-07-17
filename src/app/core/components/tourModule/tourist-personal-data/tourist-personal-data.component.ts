import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../services/BookingService';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SuccessModalComponent } from '../../../../shared/components/success-modal/success-modal.component';

@Component({
  selector: 'app-tourist-personal-data',
  templateUrl: './tourist-personal-data.component.html',
  styleUrl: './tourist-personal-data.component.scss'
})
export class TouristPersonalDataComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  touristForm: FormGroup;
  tourId: number | undefined;

  constructor(
    public dialogRef: MatDialogRef<TouristPersonalDataComponent>,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private touristService: BookingService,
    private route : ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public bookingData: any
  ) {
    this.touristForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });


  }

  saveTouristReservation() {
    if (this.touristForm.valid) {
      const formData = {
        ...this.bookingData, 
        ...this.touristForm.value
      };
      console.log('Formulario válido', formData);

      this.touristService.saveTourist(formData).subscribe(
        response => {
          console.log('Datos enviados correctamente', response);
          this.dialogRef.close();

          const dialogRef = this.dialog.open(SuccessModalComponent, {
            data: { message: 'Your tour has been booked successfully!' }
          });
  
          setTimeout(() => {
            dialogRef.close();
          }, 5000);
        },
        error => {
          console.error('Error al enviar los datos', error);
          // Aquí puedes manejar el error de tu API, como mostrar un mensaje de error
        }
      );
    } else {
      console.error('Formulario inválido');
      // Aquí puedes manejar el caso en que el formulario es inválido, como mostrar un mensaje al usuario
    }
  }

}
