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
  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>
        {props.boardList[0]?.board_id?.title}
      </Title>
      <StyledBoard>
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
                      <span>/ {item.user_id.name}</span>
                    </p>
                    <span>{FormatDate(item.created_at)}</span>
                  </div>
                </a>
              </Link>
            );
          })}
        </BoardList>
        {/* <Move href="/board/create" backColor="primary">
          글 작성
        </Move> */}
      </StyledBoard>
    </Layout.Container>
  );
};

export default BoardComponent;
