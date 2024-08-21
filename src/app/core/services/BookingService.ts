import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingUrl = 'https://localhost:7216/Booking/BookTour';

  constructor(private http: HttpClient) { }

  saveTourist(touristReservation: any): Observable<any> {
    console.log(touristReservation);
    return this.http.post<any>(this.bookingUrl, touristReservation)
      .pipe(
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {      
      errorMessage = `Error: ${error.error.message}`;
    } else {      
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
