import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '../../models/Tour';
import { TourService } from '../../services/TourService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.scss',
})
export class TourListComponent implements OnInit {
  public cityId: number | undefined;

  public tourId: number | undefined;

  @Input()
  public toursList: Tour[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    if (this.toursList) {
      const routeParams = this.route.snapshot.paramMap;
      this.cityId = Number(routeParams.get('cityId'));
      console.log('ID Ciudad seleccionada: ' + this.cityId);
    } else {
      this.tourService.getAll().subscribe((tours) => {
        console.log(tours);
        this.toursList = tours;
      });
    }
  }
}
