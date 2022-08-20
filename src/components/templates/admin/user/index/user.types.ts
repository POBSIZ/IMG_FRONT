import { AuthProfileType } from 'Types/authTypes';

export interface UserListItem {
  user_id: number;
  name: string;
  role: string;
  academy_id: any;
  class_id: any;
}

export interface UserPropsType {
  userList: UserListItem[];
}
