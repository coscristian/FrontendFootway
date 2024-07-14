import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TourInfoPickerComponent } from '../tour-info-picker/tour-info-picker.component';
import { ActivatedRoute } from '@angular/router';
import { TourService } from '../../../services/TourService';
import { Tour } from '../../../models/Tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})
export class TourComponent {
  public tour: Tour | undefined;
  public tourId: number | undefined;

  // public name: string | undefined;
  // public description: string | undefined;
  // public imageUrl: string | undefined;
  // public isActive: boolean | undefined;
  // public duration: number | undefined;
  // public languages: string[] | undefined;
  // public price: number | undefined;
  // public maximumCapacity: number | undefined;
  // public places: string[] | undefined;
  // public tourId: number | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void { 
    const routeParams = this.route.snapshot.paramMap;
    this.tourId = Number(routeParams.get('tourId'));
    
    console.log("ID Tour seleccionada: " + this.tourId);

    const tour: Tour = this.tourService.getTourById(this.tourId);    
    this.tour = tour;
    console.log(tour);

    // this.duration = tour.tourDetails.duration;
    // this.languages = tour.tourDetails.language;
    // this.price = tour.tourDetails.price;
    // this.maximumCapacity = tour.tourDetails.maximumCapacity;
    // this.places = tour.tourDetails.places;
  }

  openDialog(): void {
    console.log("Helo");
    const dialogRef = this.dialog.open(TourInfoPickerComponent, {      
      panelClass: 'tour-info-picker-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
