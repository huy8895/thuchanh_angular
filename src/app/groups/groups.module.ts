import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GroupListComponent} from './group-list/group-list.component';;
import {GroupAddComponent} from './group-add/group-add.component';

const routes: Routes = [
  {
    path: '', component: GroupListComponent
  },
  {
    path: 'add', component: GroupAddComponent
  }
];

@NgModule({
  declarations: [
    GroupListComponent,
    GroupAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GroupsModule {
}
