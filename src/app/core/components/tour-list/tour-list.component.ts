import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '../../models/Tour';
import { TourService } from '../../services/TourService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.scss'
})
export class TourListComponent implements OnInit{  
  public cityId: number | undefined;

  public tourId: number | undefined;  

  public toursList: Tour[] = this.tourService.getTours();

  constructor(private route: ActivatedRoute, private tourService: TourService) { }
  
  ngOnInit(): void { 
    const routeParams = this.route.snapshot.paramMap;
    this.cityId = Number(routeParams.get('cityId'));
    
    console.log("ID Ciudad seleccionada: " + this.cityId);
  }
}
