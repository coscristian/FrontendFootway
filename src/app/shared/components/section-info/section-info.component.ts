import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrl: './section-info.component.scss',
})
export class SectionInfoComponent {
  @Input()
  public title: string | undefined;

  @Input()
  public description: string | undefined;
}
