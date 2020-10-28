import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IUser} from '../iuser';
import {UserService} from '../../services/user.service';
import {IGroup} from '../../groups/igroup';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GroupService} from '../../services/group.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: IUser;
  groups$: Observable<IGroup[]>;
  private id: number;
  updateUserForm: any;

  constructor(private router: ActivatedRoute,
              private userService: UserService,
              private groupService: GroupService,
              private formBuilder: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.groups$ = this.groupService.getAll();
    this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(this.id = +params.get('id')))
    ).subscribe(value => {
      this.user = value;
      this.updateUserForm.patchValue(this.user);
    });

    this.updateUserForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        group: this.formBuilder.group(
          {id: ['']}),
      }
    );
  }

  onSubmit(): void {
    const data: IUser = this.updateUserForm.value;
    console.log('updateForm value: ' + this.updateUserForm.value);
    this.userService.upDate(this.id, data).subscribe(() => {
      this.route.navigate(['admin/users']);
    });
  }
}
