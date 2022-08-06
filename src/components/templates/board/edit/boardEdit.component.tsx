import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';

import Link from 'next/link';

import { BoardEditPropsType } from '.';
import StyledBoardEdit from './boardEdit.styled';

import { FormatDate } from 'Utils';
import Layout from 'Layouts';
import { Title, Move, Button, Select, Input, File, Back } from 'Atoms';
import { Wysiwyg } from 'Molecules';

const BoardEditComponent: React.FC<BoardEditPropsType> = (props) => {
  const [selBoard, setSelBoard] = useState<number>(NaN);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const boardTab = useMemo(
    () =>
      props.boardTab.map((item) => (
        <option
          value={Number(item.board_id)}
          key={nanoid()}
          selected={Number(item.board_id) == Number(props.content.board_id)}
        >
          {item.title}
        </option>
      )),
    [props.boardTab, props.content],
  );

  useEffect(() => {
    setTitle(props.content.title);
    setSelBoard(Number(props.content.board_id));
  }, [props.content]);

  return (
    <Layout.Container>
      <Back style={{ margin: '20px 0', alignSelf: 'flex-start' }} />
      <Title style={{ margin: '20px 0' }}>글 수정</Title>
      <StyledBoardEdit
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit(props.content.post_id, selBoard, title, content);
        }}
      >
        <div>
          <h3>게시판 선택</h3>
          <Select
            onChange={(e) => {
              setSelBoard((state) => Number(e.target.value));
            }}
          >
            <option selected style={{ display: 'none' }} hidden>
              게시판을 선택해주세요
            </option>
            {boardTab}
          </Select>
        </div>

        <div>
          <h3>제목</h3>
          <Input
            placeholder="제목"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>

        <Wysiwyg onChange={setContent} initData={props.content.content} />

        <div>
          <h3>썸네일</h3>
          <File name="thumbnail" onChange={props.handleThumbnail} />
        </div>

        <Button backColor="primary">글 수정</Button>
      </StyledBoardEdit>
    </Layout.Container>
  );
};

export default BoardEditComponent;
