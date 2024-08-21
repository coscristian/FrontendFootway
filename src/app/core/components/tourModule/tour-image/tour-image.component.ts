import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour-image',
  templateUrl: './tour-image.component.html',
  styleUrl: './tour-image.component.scss'
})
export class TourImageComponent {
  @Input() public imageUrl: string | undefined;
  @Input() public alt: string | undefined;
}
