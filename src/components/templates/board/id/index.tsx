import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import BoardComponent from './board.component';

export interface BoardType {
  // 게시글 ID
  post_id: number;

  // 게시판 ID
  board_id: any;

  // 작성자 ID
  user_id: any;

  // 썸네일
  thumbnail: string;

  // 제목
  title: string;

  // 설명
  desc: string;

  // 내용
  contents: string;

  // 추천수
  like: number;

  // 공지글
  is_notice: boolean;

  // 상태
  status: 'PUBLIC' | 'PRIVATE';

  // 수정일
  updated_at: Date;

  // 생성일
  created_at: Date;
}

export interface BoardPropsType {
  boardList: BoardType[];
}

const BoardIdTemplate: React.FC<any> = (props) => {
  return (
    <>
      <BoardComponent {...props} />
    </>
  );
};

export default BoardIdTemplate;
