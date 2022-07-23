import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import BoardComponent from './board.component';

export interface BoardHeaderType {
  // 게시판 ID
  board_id: bigint | number;

  // 이름
  title: string;

  // 설명
  desc: string;

  // 상태
  status: 'PUBLIC' | 'PRIVATE';

  // 수정일
  updated_at: Date;

  // 생성일
  created_at: Date;
}

export interface BoardType {
  // 게시글 ID
  post_id: number;

  // 게시판 ID
  board_id: number;

  // 작성자 ID
  user_id: any;

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
  boardTab: BoardHeaderType[];
  boardList: BoardType[];
}

const BoardTemplate: React.FC<any> = (props) => {
  return (
    <>
      <BoardComponent {...props} />
    </>
  );
};

export default BoardTemplate;
