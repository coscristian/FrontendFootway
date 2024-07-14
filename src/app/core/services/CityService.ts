import { Injectable } from '@angular/core';
import { City } from '../models/City';

@Injectable({  
  providedIn: 'root' 
})
export class CityService {
  private cities: City[] = [
    {id: 1, name: '1984', shortDescription: 'George Owell', longDescription: 'George Owell', imageUrl:'assets/images/London2.png'},
    {id: 2, name: '1985', shortDescription: 'George Owell', longDescription: 'George Owell', imageUrl:'assets/images/London2.png'},
    {id: 3, name: '1986', shortDescription: 'George Owell', longDescription: 'George Owell', imageUrl:'assets/images/London2.png'},
    {id: 4, name: '1987', shortDescription: 'George Owell', longDescription: 'George Owell', imageUrl:'assets/images/London2.png'},    
  ];
  
  constructor() { }

  getCities(): City[] {
    return this.cities;
  }
}