import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../../services/group.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {IGroup} from '../../groups/igroup';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  groups: Observable<IGroup[]>;
  groupId: number;

  newUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private groupService: GroupService,
              private userService: UserService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        group: this.formBuilder.group(
          {id: ['']}),
      }
    );
    this.groups = this.groupService.getAll();
  }

  // onFileChange(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.newUserForm.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }

  onSubmit(): void {
    // const formData = new FormData();
    // formData.append('file', this.newUserForm.get('fileSource').value);
    const data: IUser = this.newUserForm.value;
    console.log(this.newUserForm.value);
    this.userService.add(data).subscribe(() => {
      this.route.navigate(['admin/users']);
    });
  }

}
