import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourInfoPickerComponent } from './tour-info-picker.component';

describe('TourInfoPickerComponent', () => {
  let component: TourInfoPickerComponent;
  let fixture: ComponentFixture<TourInfoPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourInfoPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourInfoPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
