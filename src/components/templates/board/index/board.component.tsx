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

import { BoardPropsType } from '.';
import StyledBoard, { BoardHeader, BoardList } from './board.styled';

import { FormatDate } from 'Utils';
import Layout from 'Layouts';
import { Title, Move } from 'Atoms';

const BoardComponent: React.FC<BoardPropsType> = (props) => {
  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>📫 게시판</Title>
      <StyledBoard>
        <BoardHeader>
          {props.boardTab?.map((item) => {
            return (
              <Move
                href={`/board?id=${item.board_id}`}
                backColor="primary"
                key={nanoid()}
              >
                {item.title}
              </Move>
            );
          })}
        </BoardHeader>

        <BoardList>
          {props.boardList?.map((item, i) => {
            return (
              <Link href={`/board/${item.post_id}`} key={nanoid()}>
                <a>
                  <p>
                    {item.title}
                    <span>/ {item.user_id.name}</span>
                  </p>
                  <span>{item.contents.slice(0, 20)}</span>
                  <span>{FormatDate(item.created_at)}</span>
                </a>
              </Link>
            );
          })}
        </BoardList>
      </StyledBoard>
    </Layout.Container>
  );
};

export default BoardComponent;
