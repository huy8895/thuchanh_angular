import {Injectable} from '@angular/core';
import {Igroup} from '../groups/igroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Igroup[] = [{
    id: 1,
    name: 'C0520K1'
  },
    {
      id: 2,
      name: 'C0520G1'
    },
  ];

  constructor() {
  }

  getAll() {
    return this.groups;
  }

  getGroupNameById(id: number): string{
    for (const g of this.groups){
      if (g.id == id){
        return g.name;
      }
    }
    return "khong ton tai";
  }
}
