import { SelectListType } from 'Molecules/selectList';
import { UserListType } from 'Molecules/userList';

export interface QuizAssignTempPropsType {
  userList: UserListType[];
  quizList: SelectListType[];
}

export interface QuizAssignCompPropsType extends QuizAssignTempPropsType {
  handleSubmit: Function;
}
