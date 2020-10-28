import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {MessageComponent} from "../component/message/message.component";
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: UserListComponent
  },
  {
    path: 'add', component: UserAddComponent
  },
  {
    path: ':id', component: UserEditComponent
  }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    MessageComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        RouterModule.forChild(routes),
        MatButtonModule
    ]
})
export class UsersModule {
}
