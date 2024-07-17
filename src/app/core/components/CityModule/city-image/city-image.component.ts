import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-image',
  templateUrl: './city-image.component.html',
  styleUrl: './city-image.component.scss'
})
export class CityImageComponent {
  @Input() public imageUrl: string | undefined;
  @Input() public title: string | undefined;
}
