import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './core/components/home/main-content/main-content.component';
import { CityComponent } from './core/components/CityModule/city/city.component';
import { TourComponent } from './core/components/tourModule/tour/tour.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent 
  },
  {
    path: 'city/:cityId',
    component: CityComponent,
    // children: [
    //   {
    //     path: 'tour/:tourId',
    //     component: TourComponent
    //   }
    // ]
  },
  {
    path: 'tour/:tourId',
    component: TourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
