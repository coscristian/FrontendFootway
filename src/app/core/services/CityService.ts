import { Injectable } from '@angular/core';
import { City } from '../models/City';
import { TourDetails } from '../models/TourDetails';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable({  
  providedIn: 'root' 
})
export class CityService {

  private cities: City[] | undefined;
  
  private citiesUrl = 'https://localhost:7216/cities';
  
  constructor() { }

  getCities(): Observable<City[]> {
    return from(fetch(`${this.citiesUrl}/GetAll`)).pipe(
      switchMap((response) => response.json()),
      map((cities: any[]) =>
        cities.map(
          (city) =>
            new City(
              city.id,
              city.name,
              city.shortDescription,
              city.longDescription,
              city.imageUrl,
              city.tours
            )
        )
      )
    );
  }

  getCityById(id: number): Observable<City> {
    return from(fetch(`${this.citiesUrl}/GetCityById/${id}`)).pipe(
      switchMap((response) => response.json()),
      map((city: any) =>
        new City(
          city.id,
          city.name,
          city.shortDescription,
          city.longDescription,
          city.imageUrl,
          city.tours
        )
      )
    );
  }
}