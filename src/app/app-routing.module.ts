import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';

const ROUTES: Routes = [
  {
    path: 'heroes',                /*path: a string that matches the URL in the browser address bar.*/
    component: HeroesComponent     /*component: the component that the router should create when navigating to this route.*/
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
