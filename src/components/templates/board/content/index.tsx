import { useRouter } from 'next/router';
import { useMethod } from 'Hooks';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import BoardContentComponent from './boardContent.component';

export interface BoardContentType {
  post_id: number;
  board_id: number;
  user_id: any;
  is_notice: boolean;
  title: string;
  desc: string;
  content: string;
  like: number;
  status: string;
  updated_at: string;
  created_at: Date;
}

export interface BoardContentPropsType {
  content: BoardContentType;
  deletePost: (_id: number) => void;
}

const BoardContentTemplate: React.FC<
  Omit<BoardContentPropsType, 'deletePost'>
> = (props) => {
  const router = useRouter();
  const method = useMethod();

  const deletePost = async (_id) => {
    await method.DELETE(`/board/post/delete/${_id}`);
    router.push('/board', undefined, { shallow: true });
  };

  const patchPost = async () => {};

  return (
    <>
      <BoardContentComponent
        {...props}
        deletePost={deletePost}
        content={props.content}
      />
    </>
  );
};

export default BoardContentTemplate;
