import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../iuser';
import {UserService} from '../../services/user.service';
import {GroupService} from '../../services/group.service';
import {Observable, Subscription} from 'rxjs';
import {DialogComponent} from '../../component/dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  disable = true;
  text: string;
  p: number = 1;
  // tslint:disable-next-line:variable-name
  page_title = 'User list';
  statusHidden = false;
  filterUser: IUser[];

  sizeImage = '100';
  private dataDialog: any;

  constructor(private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value =>
      this.filterUser = value);
  }

  disableImage(): void {
    this.statusHidden = !this.statusHidden;
  }

  search(keyword): void {
    // this.filterUser = (keyword) ? this.userService.findUserByName(keyword) : this.users;
  }

  delete(id: number): void {
    console.log(id);
    this.userService.deleteUser(id).subscribe(() => this.text = 'delete success!');
  }

  disableUser(): void {
    this.disable = !this.disable;
  };

  openConfirmDialog(index, user: IUser): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '220px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        console.log(result);
        this.delete(result.id);
        this.filterUser.splice(index, 1);
      }

    });
  }
}
