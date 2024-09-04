import { Component, OnInit, OnDestroy } from '@angular/core';


interface Testimonial {
  name: string;
  message: string;
  date: string;
  rating: number;
  image: string;  
}

@Component({
  selector: 'app-testimonials-v2',
  templateUrl: './testimonials-v2.component.html',
  styleUrl: './testimonials-v2.component.scss'
})
export class TestimonialsV2Component {

  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      message: 'An incredible experience! The tour was very well organized and the guides were very friendly.',
      date: '2024-06-15',
      rating: 5,
      image: 'assets/images/jhon.png'
    },
    {
      name: 'Jane Smith',
      message: 'Beautiful landscapes and excellent service. Highly recommended!',
      date: '2024-07-02',
      rating: 4,
      image: 'assets/images/avatar1.jpeg'
    },
    {
      name: 'Carlos Perez',
      message: 'The best tour I’ve ever taken, everything was perfect.',
      date: '2024-07-22',
      rating: 5,
      image: 'assets/images/carlos.jpeg'
    }
  ];
  
  currentTestimonialIndex: number = 0;
  autoPlayInterval: any;

  ngOnInit() {
    this.autoPlayInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000); 
  }

  ngOnDestroy() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  previousTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
