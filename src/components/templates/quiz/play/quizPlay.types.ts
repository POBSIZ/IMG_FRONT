export interface AnswerListItem {
  id: number;
  prob_id: string;
  answer: [number, string] | [];
  correctWordId: number;
  correctWord: string;
  options: string[];
  diacritic: string;
  audio: string;
}

export interface QuizItemType {
  id: number;
  prob_id: number;
  word: string;
  diacritic: string;
  options: string[];
  answer: number;
  audio: string;
}

export interface QuizPlayComponentPropsType {
  userQuizId: string;
  quizId: string;
  quizLogId: string;
  quizTitle: string;
  limitTime: number;
  quizList: QuizItemType[];
  handleSave: <T>(T: AnswerListItem[]) => any;
  getAudio: (_word: string) => any;
  router: any;
}

export type QuizPlayTemplatePropsType = Omit<
  QuizPlayComponentPropsType,
  'handleSave' | 'router' | 'getAudio'
>;
