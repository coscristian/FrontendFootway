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
  
  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void { 
    const routeParams = this.route.snapshot.paramMap;
    this.tourId = Number(routeParams.get('tourId'));    
    this.tourService.getTourById(this.tourId).subscribe(tour => {
      this.tour = tour;
    }); 
  }

  getPlacesArray(): string[] {
    return this.tour?.tourDetails.places.split(',').map(place => place.trim()) as string[];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TourInfoPickerComponent, {      
      panelClass: 'tour-info-picker-dialog',
      data: this.tourId
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
