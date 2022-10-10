import { SelectListType, SelectListPropsType } from 'Molecules/selectList';

export interface AcademyQuizListComponentPropsType {
  quizList: SelectListType[];
  handleQuiz: (
    _idx: number | string,
    _title: string,
    _subtitle: string | number,
    _dataObj: any,
  ) => any | any;
  deleteQuiz: () => any | any;
}

export interface AcademyQuizListPropsType {
  quizList: SelectListType[];
}
