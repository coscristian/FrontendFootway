import { Injectable } from '@angular/core';
import { Place, Tour } from '../models/Tour';
import { TourDetails } from '../models/TourDetails';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private tours: Tour[] | undefined;
  private toursUrl = 'https://localhost:7216/tours';

  constructor() {}

  getAll(): Observable<Tour[]> {
    return from(fetch(`${this.toursUrl}/GetAll`)).pipe(
      switchMap((response) => response.json()),
      map((tours: any[]) =>
        tours.map(
          (tour) =>
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
      switchMap(response => response.json()),
      map((tour: any) => {
        const tourDetails = tour.tourDetails?.[0];        
        const tourPlaces = tour.tourPlaces ?? []; 
  
        return new Tour(
          tour.id,
          tour.name,
          tour.shortDescription,
          tour.longDescription,
          tour.imageUrl,
          tour.isActive,
          new TourDetails(
            tourDetails?.id,
            tourDetails?.duration,
            tourDetails?.languages,
            tourDetails?.price,
            tourDetails?.maximumCapacity,
            tourDetails?.availableDates,
            tourDetails?.availableTimes,
            tourDetails?.places
          ),

          tourPlaces.map((place: any) => new Place(place.place.name, place.place.description, place.place.imageUrl))
        );
      })
    );
  }
}
