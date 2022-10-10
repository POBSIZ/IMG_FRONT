import { FormEvent } from 'react';
import { SelectListPropsType, SelectListType } from 'Molecules/selectList';

export interface BookWordListType {
  idx: number;
  title: string;
  subtitle: number | string;
  isRandom: boolean;
  isScope: boolean;
  amount: number | string;
  scope: [number, number];
}

export interface QuizCreateResDataType {
  title: string;
  time: number;
  // wordList: BookWordListType[];
  book_id: string;
  scope: [number, number];
  word_count: number;
  type: 'IN_PREV' | 'EX_PREV' | 'STATIC';
  max_options?: number;
}

export interface QuizCreatePropsType {
  bookList: SelectListType[];
  titleName: string;
  timeName: string;
  handleSubmit: (e: FormEvent, _data: Partial<QuizCreateResDataType>) => any;
}
