import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from '../../components/heroes/heroes.component';

const routes: Routes = [
  {
    path: 'heroes',                /*path: a string that matches the URL in the browser address bar.*/
    component: HeroesComponent     /*component: the component that the router should create when navigating to this route.*/
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
