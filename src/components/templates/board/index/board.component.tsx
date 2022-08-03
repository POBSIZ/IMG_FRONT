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
import Image from 'next/image';

import { BoardPropsType } from '.';
import StyledBoard, { BoardHeader, BoardList } from './board.styled';

import { FormatDate } from 'Utils';
import Layout from 'Layouts';
import { Title, Move } from 'Atoms';

const BoardComponent: React.FC<BoardPropsType> = (props) => {
  const [currPage, setCurrPage] = useState(0);

  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>📫 게시판</Title>
      <StyledBoard>
        <BoardHeader>
          {props.boardTab?.map((item, i) => {
            return (
              <Link href={`/board?id=${item.board_id}`} key={nanoid()}>
                <Layout.Content
                  onClick={() => {
                    setCurrPage(i);
                  }}
                  style={{
                    backgroundColor: currPage === i ? 'hsl(48, 100%, 50%)' : '',
                    color: currPage === i ? '#000' : '',
                    padding: '14px 20px',
                    cursor: 'pointer',
                  }}
                >
                  {item.title}
                </Layout.Content>
              </Link>
            );
          })}
        </BoardHeader>

        <BoardList>
          {props.boardList?.map((item, i) => {
            return (
              <Link href={`/board/content/${item.post_id}`} key={nanoid()}>
                <a>
                  <img
                    src={
                      item.thumbnail
                        ? `${process.env.NEXT_PUBLIC_SERVER}${item.thumbnail}`
                        : '/img/main_bg.svg'
                    }
                  />
                  <div>
                    <p>
                      {item.title}
                      <span>/ {item.user_id.nickname}</span>
                    </p>
                    <span>{FormatDate(item.created_at)}</span>
                  </div>
                </a>
              </Link>
            );
          })}
        </BoardList>
        <Move href="/board/create" backColor="primary">
          글 작성
        </Move>
      </StyledBoard>
    </Layout.Container>
  );
};

export default BoardComponent;
