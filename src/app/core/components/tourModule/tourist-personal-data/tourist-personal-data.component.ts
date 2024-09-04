// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { BookingService } from '../../../services/BookingService';
// import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { ActivatedRoute } from '@angular/router';
// import { SuccessModalComponent } from '../../../../shared/components/success-modal/success-modal.component';

// @Component({
//   selector: 'app-tourist-personal-data',
//   templateUrl: './tourist-personal-data.component.html',
//   styleUrl: './tourist-personal-data.component.scss'
// })
// export class TouristPersonalDataComponent {
//   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
//   touristForm: FormGroup;
//   tourId: number | undefined;

//   constructor(
//     public dialogRef: MatDialogRef<TouristPersonalDataComponent>,
//     public dialog: MatDialog,
//     private fb: FormBuilder,
//     private touristService: BookingService,
//     private route : ActivatedRoute,
//     @Inject(MAT_DIALOG_DATA) public bookingData: any
//   ) {
//     this.touristForm = this.fb.group({
//       fullName: ['', Validators.required],
//       phoneNumber: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]]
//     });


//   }

//   saveTouristReservation() {
//     if (this.touristForm.valid) {
//       const formData = {
//         ...this.bookingData, 
//         ...this.touristForm.value
//       };

//       this.touristService.saveTourist(formData).subscribe(
//         response => {
//           this.dialogRef.close();

//           const dialogRef = this.dialog.open(SuccessModalComponent, {
//             data: { message: 'Your tour has been booked successfully!' }
//           });
//         },
//         error => {
//         }
//       );
//     }
//   }

// }

// OK
// import { Component, Inject, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { BookingService } from '../../../services/BookingService';
// import { SuccessModalComponent } from '../../../../shared/components/success-modal/success-modal.component';

// @Component({
//   selector: 'app-tourist-personal-data',
//   templateUrl: './tourist-personal-data.component.html',
//   styleUrls: ['./tourist-personal-data.component.scss']
// })
// export class TouristPersonalDataComponent implements OnInit {
//   touristForm!: FormGroup;
//   currentTouristIndex: number = 0;

//   constructor(
//     public dialogRef: MatDialogRef<TouristPersonalDataComponent>,
//     public dialog: MatDialog,
//     private fb: FormBuilder,
//     private touristService: BookingService,
//     @Inject(MAT_DIALOG_DATA) public bookingData: any
//   ) {}

//   ngOnInit() {
//     this.touristForm = this.fb.group({
//       tourists: this.fb.array([this.createTouristFormGroup()])
//     });
//   }

//   get tourists(): FormArray {
//     return this.touristForm.get('tourists') as FormArray;
//   }

//   get currentFormGroup(): FormGroup {
//     return this.tourists.at(this.currentTouristIndex) as FormGroup;
//   }

//   createTouristFormGroup(): FormGroup {
//     return this.fb.group({
//       fullName: ['', Validators.required],
//       phoneNumber: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   nextTourist() {
//     if (this.currentTouristIndex < this.tourists.length - 1) {
//       this.currentTouristIndex++;
//     } else {
//       this.tourists.push(this.createTouristFormGroup());
//       this.currentTouristIndex++;
//     }
//   }

//   previousTourist() {
//     if (this.currentTouristIndex > 0) {
//       this.currentTouristIndex--;
//     }
//   }

//   saveTouristReservation() {
//     if (this.touristForm.valid) {
//       const formData = {
//         ...this.bookingData,
//         tourists: this.touristForm.value.tourists
//       };
//       console.log(formData);
//       this.touristService.saveTourist(formData).subscribe(
//         response => {
//           this.dialogRef.close();
//           this.dialog.open(SuccessModalComponent, {
//             data: { message: 'Your tour has been booked successfully!' }
//           });
//         },
//         error => {
//           // Manejo del error
//         }
//       );
//     }
//   }
// }

import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BookingService } from '../../../services/BookingService';
import { SuccessModalComponent } from '../../../../shared/components/success-modal/success-modal.component';

@Component({
  selector: 'app-tourist-personal-data',
  templateUrl: './tourist-personal-data.component.html',
  styleUrls: ['./tourist-personal-data.component.scss']
})
export class TouristPersonalDataComponent implements OnInit {
  touristForm!: FormGroup;
  currentTouristIndex: number = 0;

  constructor(
    public dialogRef: MatDialogRef<TouristPersonalDataComponent>,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private touristService: BookingService,
    @Inject(MAT_DIALOG_DATA) public bookingData: any
  ) {}

  ngOnInit() {
    this.touristForm = this.fb.group({
      tourists: this.fb.array([this.createTouristFormGroup()])
    });
  }

  get tourists(): FormArray {
    return this.touristForm.get('tourists') as FormArray;
  }

  get currentFormGroup(): FormGroup {
    return this.tourists.at(this.currentTouristIndex) as FormGroup;
  }

  createTouristFormGroup(): FormGroup {
    return this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  handleAddOrNext() {
    if (this.currentFormGroup.valid) {
      if (this.currentTouristIndex === this.tourists.length - 1) {
        this.addTourist();
      } else {
        this.nextTourist();
      }
    } else {
      alert('Please fill out the current form before proceeding.');
    }
  }

  addTourist() {
    if (this.currentFormGroup.valid && this.isCurrentFormGroupComplete()) {
      this.tourists.push(this.createTouristFormGroup());
      this.currentTouristIndex = this.tourists.length - 1; // Cambiar al nuevo formulario
    } else {
      alert('Please fill out the current form before adding a new one.');
    }
  }

  previousTourist() {
    if (this.currentTouristIndex > 0) {
      this.currentTouristIndex--;
    }
  }

  nextTourist() {
    if (this.currentTouristIndex < this.tourists.length - 1) {
      this.currentTouristIndex++;
    }
  }

  removeCurrentTourist() {
    if (this.tourists.length > 1) {
      this.tourists.removeAt(this.currentTouristIndex);
      if (this.currentTouristIndex >= this.tourists.length) {
        this.currentTouristIndex = this.tourists.length - 1; // Ajustar el índice si es necesario
      }
    }
  }

  isCurrentFormGroupComplete(): boolean {
    return this.currentFormGroup.valid;
  }

  isAllFormsComplete(): boolean {
    return this.tourists.controls.every(formGroup => formGroup.valid);
  }

  saveTouristReservation() {
    if (this.touristForm.valid && this.isAllFormsComplete()) {
      const formData = {
        ...this.bookingData,
        tourists: this.touristForm.value.tourists
      };

      this.touristService.saveTourist(formData).subscribe(
        response => {
          this.dialogRef.close();
          this.dialog.open(SuccessModalComponent, {
            data: { message: 'Your tour has been booked successfully!' }
          });
        },
        error => {
          console.error('Error al reservar el tour', error);
        }
      );
    } else {
      alert('Please make sure all forms are completed before booking.');
    }
  }
}










