import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourImageComponent } from './tour-image.component';

describe('TourImageComponent', () => {
  let component: TourImageComponent;
  let fixture: ComponentFixture<TourImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
