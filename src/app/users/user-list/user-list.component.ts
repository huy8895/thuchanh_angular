import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../iuser';
import {UserService} from '../../services/user.service';
import {GroupService} from '../../services/group.service';
import {Observable, Subscription} from 'rxjs';

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

  constructor(private userService: UserService) {
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

  delete(index): void {
    // if (confirm('Are you sure?')) {
    //   this.users.splice(index, 1);
    //   this.text = 'delete success!';
    // }
  }

  addUser(data): void {
  }

  disableUser(): void {
    this.disable = !this.disable;
  };

}
