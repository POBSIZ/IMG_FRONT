export interface WordEntity {
  word_id: bigint | number;

  // book_id: BookEntity;

  word: string;

  diacritic: string;

  meaning: string;

  type: string;
}
