import {Injectable} from '@angular/core';
import {IGroup} from '../groups/igroup';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class GroupService {
  groups: IGroup[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(API_URL + 'groups');
  }
}
