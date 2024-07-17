import { Injectable } from '@angular/core';
import { Tour } from '../models/Tour';
import { TourDetails } from '../models/TourDetails';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable({  
  providedIn: 'root' 
})
export class TourService {
  private tours: Tour[] | undefined;
  private toursUrl = 'https://footwayservices.azurewebsites.net/tours';

  constructor() { }
    
  getAll(): Observable<Tour[]> {
    return from(fetch(`${this.toursUrl}/GetAll`)).pipe(
      switchMap((response) => response.json()),
      map((tours: any[]) =>
        tours.map((tour) =>
          new Tour(
            tour.id,
            tour.name,
            tour.shortDescription,
            tour.longDescription,
            tour.imageUrl,
            tour.isActive,
            new TourDetails(
              tour.tourDetails.id,
              tour.tourDetails.duration,
              tour.tourDetails.languages,
              tour.tourDetails.price,
              tour.tourDetails.maximumCapacity,
              tour.tourDetails.availableDates,
              tour.tourDetails.availableTimes,
              tour.tourDetails.places
            )
          )
        )
      )
    );
  }

  getTourById(id: number): Observable<Tour> {
    return from(fetch(`${this.toursUrl}/GetTourById/${id}`)).pipe(
      switchMap((response) => response.json()),
      map((tour: any) =>
        new Tour(
          tour.id,
          tour.name,
          tour.shortDescription,
          tour.longDescription,
          tour.imageUrl,
          tour.isActive,
          new TourDetails(
            tour.tourDetails[0].id,
            tour.tourDetails[0].duration,
            tour.tourDetails[0].languages,
            tour.tourDetails[0].price,
            tour.tourDetails[0].maximumCapacity,
            tour.tourDetails[0].availableDates,
            tour.tourDetails[0].availableTimes,
            tour.tourDetails[0].places
          )
        )
      )
    );
  }
}