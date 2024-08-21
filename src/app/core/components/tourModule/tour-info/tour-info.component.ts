import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrl: './tour-info.component.scss'
})
export class TourInfoComponent {
  @Input() public name: string | undefined;
  @Input() public description: string | undefined;
}
