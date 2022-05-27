export interface AnswerListItem {
  id: number | null;
  answer: [number, string] | null;
  isCorrect: boolean;
}

export interface QuizItemType {
  word: string;
  diacritic: string;
  options: string[];
  answer: number;
}

export interface QuizPlayTemplatePropsType {
  limitTime: number;
  quizList: QuizItemType[];
}
