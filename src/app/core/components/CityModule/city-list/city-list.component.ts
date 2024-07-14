import { Component, Input } from '@angular/core';
import { cities, City } from '../../../models/City';
import { CityService } from '../../../services/CityService';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.scss'
})
export class CityListComponent {

  public citiesList: City[] | undefined; 

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.citiesList = this.cityService.getCities();  
   
    console.log(this.citiesList);
  }

}
