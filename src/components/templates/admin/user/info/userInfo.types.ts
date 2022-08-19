import { UserListItem } from '../index/user.types';
import { QuizLogItemType } from 'Templates/profile';

export interface UserInfoPropsType {
  profile: UserListItem;
  quizLog?: QuizLogItemType[];
}
