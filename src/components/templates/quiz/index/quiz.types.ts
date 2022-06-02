export interface QuizItemType {
  id: number;
  title: string;
  date: string;
  tryCount: number;
  solvedCount: number;
  maxCount: number;
  disabled: boolean;
}

export interface QuizTemplatePropsType {
  quizList: QuizItemType[];
}
