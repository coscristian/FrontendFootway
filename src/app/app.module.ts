import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './core/components/layout/top-bar/top-bar.component';
import { FooterComponent } from './core/components/layout/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainContentComponent } from './core/components/home/main-content/main-content.component';
import { HomeImageComponent } from './core/components/home/home-image/home-image.component';
import { CardCatalogComponent } from './shared/components/card-catalog/card-catalog.component';
import { SectionInfoComponent } from './shared/components/section-info/section-info.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './shared/components/card/card.component';
import { TestimonialsComponent } from './core/components/testimonialsModule/testimonials/testimonials.component';
import { TestimonialCardComponent } from './core/components/testimonialsModule/testimonial-card/testimonial-card.component';
import { CityComponent } from './core/components/CityModule/city/city.component';
import { CityImageComponent } from './core/components/CityModule/city-image/city-image.component';
import { CityContentComponent } from './core/components/CityModule/city-content/city-content.component';
import { TourComponent } from './core/components/tourModule/tour/tour.component';
import { TourImageComponent } from './core/components/tourModule/tour-image/tour-image.component';
import { TourInfoComponent } from './core/components/tourModule/tour-info/tour-info.component';
import { TourDetailsComponent } from './core/components/tourModule/tour-details/tour-details.component';
import { GenericButtonComponent } from './shared/components/generic-button/generic-button.component';
import {MatButtonModule} from '@angular/material/button';
import { TourDateModalComponent } from './core/components/tourModule/tour-date-modal/tour-date-modal.component';
import { TourInfoPickerComponent } from './core/components/tourModule/tour-info-picker/tour-info-picker.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { SelectTimeComponent } from './core/components/tourModule/select-time/select-time.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SelectAmountTouristsComponent } from './core/components/tourModule/select-amount-tourists/select-amount-tourists.component';
import { CardCityComponentComponent } from './core/components/CityModule/card-city-component/card-city-component.component';
import { CityListComponent } from './core/components/CityModule/city-list/city-list.component';
import { TourListComponent } from './core/components/tour-list/tour-list.component';
import { TouristPersonalDataComponent } from './core/components/tourModule/tourist-personal-data/tourist-personal-data.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessModalComponent } from './shared/components/success-modal/success-modal.component';
import { TestimonialsV2Component } from './core/components/testimonialsModule/testimonials-v2/testimonials-v2.component';
import { CityDetailComponent } from './core/components/CityModule/city/city-detail/city-detail.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    MainContentComponent,
    HomeImageComponent,
    CardCatalogComponent,
    SectionInfoComponent,
    CardComponent,
    TestimonialsComponent,
    TestimonialCardComponent,
    CityComponent,
    CityImageComponent,
    CityContentComponent,
    TourComponent,
    TourImageComponent,
    TourInfoComponent,
    TourDetailsComponent,
    GenericButtonComponent,
    TourDateModalComponent,
    TourInfoPickerComponent,
    SelectTimeComponent,
    SelectAmountTouristsComponent,
    CardCityComponentComponent,
    CityListComponent,
    TourListComponent,
    TouristPersonalDataComponent,
    SuccessModalComponent,
    TestimonialsV2Component,
    CityDetailComponent
    // CalendarDate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    HttpClientModule,
    NgxTypedWriterModule
  ],
  providers: [
    provideAnimationsAsync(),
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, direction: 'ltr'}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
