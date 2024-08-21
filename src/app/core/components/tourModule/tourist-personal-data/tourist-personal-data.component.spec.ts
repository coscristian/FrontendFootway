import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristPersonalDataComponent } from './tourist-personal-data.component';

describe('TouristPersonalDataComponent', () => {
  let component: TouristPersonalDataComponent;
  let fixture: ComponentFixture<TouristPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouristPersonalDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
