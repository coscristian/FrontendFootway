import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  public imagePath: string | undefined;

  @Input()
  public title: string | undefined;

  @Input()
  public description: string | undefined;

  @Input()
  public alt: string | undefined;

  @Input()
  public link: string | undefined;

}
