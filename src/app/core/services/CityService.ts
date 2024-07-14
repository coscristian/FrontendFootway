import { Injectable } from '@angular/core';
import { City } from '../models/City';
import { TourDetails } from '../models/TourDetails';

@Injectable({  
  providedIn: 'root' 
})
export class CityService {
  private cities: City[] = [
    new City(1, 'New York', 'The Big Apple', 'A city that never sleeps', 'assets/images/London2.png', [{
      id: 1,
      name: 'Tour in London111',
      shortDescription: 'El borough de Westminster es una de las zonas más importantes de la ciudad de Londres',
      longDescription: 'El borough de Westminster es una de las zonas más importantes de la ciudad de Londres, es el sitio en donde se encuentran las residencias oficiales de los reyes a lo largo de su historia.  También es la zona donde se encuentra la casa del Parlamento, Primer Ministro y muchos de los Lords de la historia del Reino Unido.',
      imageUrl:'assets/images/London2.png',
      isActive: true,
      tourDetails: new TourDetails(
        1,      
        2,
        ['English', 'Spanish'],
        100,
        10,
        new Date('2021-12-01'),
        [new Date('2021-12-01')],
        ['London Bridge', 'Big Ben', 'London Eye']
      )
    }]),
    // new City(2, 'Paris', 'The City of Love', 'A romantic city with rich history', 'paris.jpg', []),
    // new City(3, 'Tokyo', 'The Capital of Japan', 'A bustling metropolis with modern technology', 'tokyo.jpg', []),
    // new City(4, 'Sydney', 'The Harbour City', 'A vibrant city with iconic landmarks', 'sydney.jpg', []),
    // new City(5, 'Rome', 'The Eternal City', 'A city with ancient ruins and delicious cuisine', 'rome.jpg', [])
    
  ]
  
  constructor() { }

  getCities(): City[] {
    return this.cities;
  }

  getCityById(cityId: number): City {
    return this.cities.find(city => city.id === cityId) as City;
  }
}