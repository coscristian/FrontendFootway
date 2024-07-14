import { Injectable } from '@angular/core';
import { Tour } from '../models/Tour';
import { TourDetails } from '../models/TourDetails';

@Injectable({  
  providedIn: 'root' 
})
export class TourService {
  
  private tours: Tour[] = [
    {
      id: 1,
      name: 'Tour in London',
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
    },
    {
      id: 2,
      name: 'Tour in London 2',
      shortDescription: 'Es posible que Jack el Destripador sea uno de los asesinos más crueles en la historia y sin duda es el más famoso de todos ellos',
      longDescription: 'Es posible que Jack el Destripador sea uno de los asesinos más crueles en la historia y sin duda es el más famoso de todos ellos. Será que su nombre todavía nos evoca ese miedo que sólo pueden provocar unos pasos en la oscuridad del resplandor de un súbito cuchillo en una calle solitaria en Whitechapel las cuales estaremos recorriendo',
      imageUrl:'assets/images/londonNew.jpg',
      isActive: true,
      tourDetails: new TourDetails(
        1,      
        2,
        ['French', 'Italian'],
        100,
        10,
        new Date('2021-12-01'),
        [new Date('2021-12-01')],
        ['London Bridge', 'Big Ben', 'London Eye']
      )
    }
  ];
  
  constructor() { }

  getTours(): Tour[] {
    return this.tours;
  }

  getTourById(tourId: number): Tour {
    return this.tours.find(tour => tour.id === tourId) as Tour;
  }
}