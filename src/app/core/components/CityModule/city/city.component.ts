import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../../models/City';
import { Tour } from '../../../models/Tour';
import { TourService } from '../../../services/TourService';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../../services/CityService';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent implements OnInit{
  
  city: City | undefined;
  tours: Tour[] | undefined;  
  cityId: number | undefined;

  constructor(private route: ActivatedRoute, private cityService: CityService) {}
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.cityId = Number(routeParams.get('cityId'));

    this.city = this.cityService.getCityById(this.cityId);
  }
}
