import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups = [{
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

  getAll(): any {
    return this.groups;
  }

  getGroupNameById(id: number): string {
    for (let g of this.groups) {
      if (g.id === id) {
        return g.name;
      }
    }
    return 'khong co';
  }
}
