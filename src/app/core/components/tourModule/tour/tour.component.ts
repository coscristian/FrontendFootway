import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TourService } from '../../../services/TourService';
import { Tour } from '../../../models/Tour';
import { TourInfoPickerComponent } from '../tour-info-picker/tour-info-picker.component';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})
export class TourComponent {
  public tour: Tour | undefined;
  public tourId: number | undefined;
  offsetFlag = false;

  public slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    this.tourId = Number(this.route.snapshot.paramMap.get('tourId'));
    this.tourService.getTourById(this.tourId).subscribe(tours => {
      console.log(tours);
      this.tour = tours;

      this.tour.tourPlaces = this.tour?.tourPlaces ?? [];
    }); 
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(TourInfoPickerComponent, {      
      panelClass: 'tour-info-picker-dialog',
      data: this.tourId
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if(window.pageYOffset> 690 )
     this.offsetFlag = true;
    else
      this.offsetFlag = false;
  } 

}