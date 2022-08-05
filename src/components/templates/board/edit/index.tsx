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

import BoardEditComponent from './boardEdit.component';

export interface BoardHeaderType {
  board_id: bigint | number; // 게시판 ID
  title: string; // 이름
  desc: string; // 설명
  status: 'PUBLIC' | 'PRIVATE'; // 상태
  updated_at: Date; // 수정일
  created_at: Date; // 생성일
}

export interface BoardEditPropsType {
  content: any;
  boardTab: BoardHeaderType[];
  handleSubmit: (
    _post_id: string,
    _board_id: number,
    _title: string,
    _content: string,
  ) => void;
  handleThumbnail: (...args: any) => void;
}

const BoardEditTemplate: React.FC<any> = (props) => {
  const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();

  const [thumbnail, setThumbnail] = useState<string>('');

  const handleSubmit = async (
    _post_id,
    _board_id,
    _title,
    _content,
    _thumbnail,
  ) => {
    try {
      const res = await method.PATCH('/board/post/patch', {
        post_id: _post_id,
        board_id: _board_id,
        title: _title,
        content: _content,
        thumbnail: thumbnail,
      });

      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '글을 수정하였습니다.',
        }),
      );

      router.push('/board', undefined, { shallow: true });
    } catch (error) {
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '글 수정에 실패하였습니다.',
        }),
      );
    }
  };

  const handleThumbnail = async (e) => {
    const body = new FormData();
    const _file = e.target.files[0];
    body.append('files', _file);

    const res = await method.POST(`/board/upload/image`, body);

    setThumbnail(res.data);
  };

  useEffect(() => {
    setThumbnail(props.content.thumbnail);
  }, [props.content]);

  return (
    <>
      <BoardEditComponent
        handleSubmit={handleSubmit}
        handleThumbnail={handleThumbnail}
        {...props}
      />
    </>
  );
};

export default BoardEditTemplate;
