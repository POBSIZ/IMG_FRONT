import { pushToastAsync } from 'Actions/toastAction';
import { useMethod } from 'Hooks';
import { useRouter } from 'next/router';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import BoardCreateComponent from './boardCreate.component';

export interface BoardHeaderType {
  board_id: bigint | number; // 게시판 ID
  title: string; // 이름
  desc: string; // 설명
  status: 'PUBLIC' | 'PRIVATE'; // 상태
  updated_at: Date; // 수정일
  created_at: Date; // 생성일
}

export interface BoardCreatePropsType {
  boardTab: BoardHeaderType[];
  handleSubmit: (_board_id: number, _title: string, _content: string) => void;
}

const BoardCreateTemplate: React.FC<any> = (props) => {
  const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (_board_id, _title, _content) => {
    try {
      const res = await method.POST('/board/post/create', {
        board_id: _board_id,
        title: _title,
        content: _content,
      });

      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '글을 생성하였습니다.',
        }),
      );

      router.push('/board');
    } catch (error) {
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '글 생성에 실패하였습니다.',
        }),
      );
    }
  };
  return (
    <>
      <BoardCreateComponent handleSubmit={handleSubmit} {...props} />
    </>
  );
};

export default BoardCreateTemplate;
