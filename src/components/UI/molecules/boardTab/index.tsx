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

import StyledBoardTab from './boardTab.styled';
import { FormatDate } from 'Utils';

export interface BoardTabPropsType {
  title: string;
  list: any[];
}

const BoardTab: React.FC<any> = (props) => {
  return (
    <>
      <StyledBoardTab>
        <p>{props.title}</p>
        <ul>
          {props.list?.map((item, i) => {
            return (
              <Link href={`/board/content/${item.post_id}`} key={nanoid()}>
                <a>
                  <span>{item.title}</span>
                  <span>{FormatDate(item.created_at)}</span>
                </a>
              </Link>
            );
          })}
          {props.list.length > 0 ? (
            <Link href={`/board/${props.list[0]?.board_id?.board_id}`}>
              더보기...
            </Link>
          ) : null}
        </ul>
      </StyledBoardTab>
    </>
  );
};

export default BoardTab;
