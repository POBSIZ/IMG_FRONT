export interface AnswerListItem {
  id: number;
  answer: [number, string] | [];
  correctWordId: number;
  options: string[];
  diacritic: string;
}

export interface QuizItemType {
  word: string;
  diacritic: string;
  options: string[];
  answer: number;
}

export interface QuizPlayComponentPropsType {
  quizTitle: string;
  quizId: number;
  limitTime: number;
  quizList: QuizItemType[];
  handleSave: (list: AnswerListItem[]) => any;
}

export type QuizPlayTemplatePropsType = Omit<
  QuizPlayComponentPropsType,
  'handleSave'
>;
