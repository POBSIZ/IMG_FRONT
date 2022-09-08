export interface QuizItemType {
  userQuiz_id: number;
  quiz_id: number;
  title: string;
  date: string;
  tryCount: number;
  solvedCount: number;
  maxCount: number;
  disabled: boolean;
  is_voca: boolean;
  voca_id: number;
}

export interface QuizTemplatePropsType {
  quizList: QuizItemType[];
  isLoading: boolean;
}
