import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDateModalComponent } from './tour-date-modal.component';

describe('TourDateModalComponent', () => {
  let component: TourDateModalComponent;
  let fixture: ComponentFixture<TourDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourDateModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
