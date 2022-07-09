import { SelectListType, SelectListPropsType } from 'Molecules/selectList';

export interface AdminBookListComponentPropsType {
  bookList: SelectListType[];
  handleBook: (
    _idx: number,
    _title: string,
    _subtitle: string | number,
    _dataObj: any,
  ) => any | any;
  deleteBook: () => any | any;
}

export interface AdminBookListPropsType {
  bookList: SelectListType[];
}
