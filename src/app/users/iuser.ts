import {IGroup} from '../groups/igroup';

export interface IUser {
  id?: number,
  name: string,
  email: string,
  avatar?: string,
  role: number;
  group: IGroup;
  password?: any
}
