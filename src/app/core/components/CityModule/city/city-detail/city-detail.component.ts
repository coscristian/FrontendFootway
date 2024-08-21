// city-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../../../services/CityService';
import { City } from '../../../../models/City';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {
  city: City | undefined; 
  cityId: number | undefined;

  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    const cityId = Number(this.route.snapshot.paramMap.get('cityId'));
    this.cityService.getCityById(cityId).subscribe(cities => {
      console.log(cities);
      this.city = cities;
    });     

  }
}
