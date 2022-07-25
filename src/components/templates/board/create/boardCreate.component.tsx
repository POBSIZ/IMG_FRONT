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

import { BoardCreatePropsType } from '.';
import StyledBoardCreate from './boardCreate.styled';

import { FormatDate } from 'Utils';
import Layout from 'Layouts';
import { Title, Move, Button, Select, Input } from 'Atoms';
import { Wysiwyg } from 'Molecules';

const BoardCreateComponent: React.FC<BoardCreatePropsType> = (props) => {
  const [selBoard, setSelBoard] = useState<number>(NaN);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const boardTab = useMemo(() => props.boardTab, [props.boardTab]);

  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>글 작성</Title>
      <StyledBoardCreate
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit(selBoard, title, content);
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
            {boardTab.map((item) => (
              <option value={Number(item.board_id)}>{item.title}</option>
            ))}
          </Select>
        </div>

        <div>
          <h3>제목</h3>
          <Input
            placeholder="제목"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <Wysiwyg onChange={setContent} />

        <Button backColor="primary">글 작성</Button>
      </StyledBoardCreate>
    </Layout.Container>
  );
};

export default BoardCreateComponent;
