import { Component, Input } from '@angular/core';
import { City } from '../../../models/City';
import { CityService } from '../../../services/CityService';

@Component({
  selector: 'app-card-city-component',
  templateUrl: './card-city-component.component.html',
  styleUrl: './card-city-component.component.scss'
})
export class CardCityComponentComponent {
  @Input()
  public id: number | undefined;

  @Input()
  public name: string | undefined;

  @Input()
  public shortDescription: string | undefined;

  @Input()
  public longDescription: string | undefined;

  @Input()
  public imageUrl: string | undefined;

  // @Input()
  public citiesList: City[] = this.cityService.getCities();

  constructor(private cityService: CityService) { }

  // ngOnInit(): void {
  //   this.citiesList = this.cityService.getCities();  
  //   console.log(this.citiesList);
  //   // const routeParams = this.activatedRoute.snapshot.paramMap;
  //   // const cityId : Number = Number(routeParams.get('cityId'));
  // }
}
