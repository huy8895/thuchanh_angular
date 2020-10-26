import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppLayoutComponent} from './core/app-layout/app-layout.component';
import {LoginComponent} from './core/login/login.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {UserAddComponent} from './users/user-add/user-add.component';
import {UserListComponent} from './users/user-list/user-list.component';


const routes: Routes = [

  {
    path: 'admin',
    component: AppLayoutComponent,
    children: [
      {
        path: 'users', component: UserListComponent
      },
      {
        path: 'users/add', component: UserAddComponent
      },
      {
        path: 'users/:id/edit', component: UserEditComponent
      },
    ],
  },

  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
