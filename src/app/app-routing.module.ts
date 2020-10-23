import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {Hero} from './hero';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
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
