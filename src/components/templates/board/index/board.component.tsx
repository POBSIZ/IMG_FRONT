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
import { CheckRole } from 'Hoc';
import { useRouter } from 'next/router';

const BoardComponent: React.FC<BoardPropsType> = (props) => {
  const router = useRouter();
  const id: string =
    (router.query.id as string) ?? String(props.boardTab[0].board_id);

  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>📫 게시판</Title>
      <StyledBoard>
        <BoardHeader>
          {props.boardTab?.map((item, i) => {
            const isCurr = Number(id) === Number(item.board_id);

            return (
              <Link href={`/board?id=${item.board_id}`} key={nanoid()}>
                <a>
                  <Layout.Content
                    style={{
                      backgroundColor: isCurr ? 'hsl(48, 100%, 50%)' : '',
                      padding: '14px 20px',
                      cursor: 'pointer',
                    }}
                  >
                    {item.title}
                  </Layout.Content>
                </a>
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
        <CheckRole role="admin">
          <Move href="/board/create" backColor="primary">
            글 작성
          </Move>
        </CheckRole>
      </StyledBoard>
    </Layout.Container>
  );
};

export default BoardComponent;
