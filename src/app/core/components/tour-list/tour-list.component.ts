import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '../../models/Tour';
import { TourService } from '../../services/TourService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.scss',
})
export class TourListComponent implements OnInit {
  public cityId: number | undefined;
  public tourId: number | undefined;
  
  @Input()
  public reload: boolean | undefined;
  
  @Input()
  public toursList: Tour[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    if (this.toursList) {
      const routeParams = this.route.snapshot.paramMap;
      this.cityId = Number(routeParams.get('cityId'));
      
    } else {
      const routeParams = this.route.snapshot.paramMap;
      this.tourId = Number(routeParams.get('tourId'));

      this.tourService.getAll().subscribe((tours) => {
        this.toursList = tours.filter((tour) => tour.id != this.tourId);
      });
      this.reload = true;
    }
  }

  navigateToTour(tourId: number): void {    
    this.router.navigate(['/tour', tourId]).then(() => {      
      if(this.reload){
        window.location.reload(); // Reload necesario cuando se selecciona un tour del "Check other tours" en la página de un tour    
      }
    });
  }
}
