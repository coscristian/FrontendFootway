import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.scss'
})
export class TourDetailsComponent {

  @Input() public duration: number | undefined;  
  @Input() public languages: string | undefined;
  @Input() public price: number | undefined;
  @Input() public maximumCapacity: number | undefined;
  @Input() public places: string[] | undefined;
  @Input() public tourId: number | undefined;
}
