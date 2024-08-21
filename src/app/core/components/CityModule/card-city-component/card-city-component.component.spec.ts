import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCityComponentComponent } from './card-city-component.component';

describe('CardCityComponentComponent', () => {
  let component: CardCityComponentComponent;
  let fixture: ComponentFixture<CardCityComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCityComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
