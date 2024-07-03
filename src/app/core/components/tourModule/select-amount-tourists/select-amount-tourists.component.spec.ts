import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAmountTouristsComponent } from './select-amount-tourists.component';

describe('SelectAmountTouristsComponent', () => {
  let component: SelectAmountTouristsComponent;
  let fixture: ComponentFixture<SelectAmountTouristsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectAmountTouristsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAmountTouristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
