import { Injectable } from '@angular/core';
import {IUser} from "../users/iuser";
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {};

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(API_URL + 'users');
  }

  add(data: IUser): Observable<IUser> {
    console.log('data' + JSON.stringify(data));
    return this.http.post<IUser>(API_URL + 'users', data);
  }
}
