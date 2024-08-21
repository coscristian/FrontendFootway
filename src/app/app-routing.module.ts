import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './core/components/home/main-content/main-content.component';
import { TourComponent } from './core/components/tourModule/tour/tour.component';
import { CityDetailComponent } from './core/components/CityModule/city/city-detail/city-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent 
  },
  {
    path: 'city/:cityId',
    component: CityDetailComponent,
  },
  {
    path: 'tour/:tourId',
    component: TourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
