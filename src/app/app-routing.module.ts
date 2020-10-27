import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {AppLayoutComponent} from "./core/app-layout/app-layout.component";
import {AdminGuard} from "./admin/admin.guard";
import {UsersModule} from "./users/users.module";
import {GroupsModule} from './groups/groups.module';


const routes: Routes = [
  {
    path: 'admin',
    component: AppLayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: (() => import('./users/users.module').then(() => UsersModule)),
      },
      {
        path: 'groups',
        loadChildren: (() => import('./groups/groups.module').then(() => GroupsModule)),
      }
    ],
    canActivate: [AdminGuard]
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
