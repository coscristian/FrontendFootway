import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsV2Component } from './testimonials-v2.component';

describe('TestimonialsV2Component', () => {
  let component: TestimonialsV2Component;
  let fixture: ComponentFixture<TestimonialsV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
