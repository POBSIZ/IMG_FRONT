export interface UserListItem {
  user_id: number;
  name: string;
  school: string;
  grade: string;
  phone: string;
}

export interface UserPropsType {
  userList: UserListItem[];
}
