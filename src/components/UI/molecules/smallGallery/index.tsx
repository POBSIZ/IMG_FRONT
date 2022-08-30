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

import StyledSmallGallery from './smallGallery.styled';
import { FormatDate } from 'Utils';

export interface SmallGalleryPropsType {
  title: string;
  list: any[];
  limit: number;
}

const SmallGallery: React.FC<any> = (props) => {
  return (
    <>
      <StyledSmallGallery>
        <p>{props.title}</p>
        <ul>
          {props.list?.map((item, i) => {
            return i > props.limit - 1 ? null : item.thumbnail ? (
              <Link href={`/board/content/${item.post_id}`} key={nanoid()}>
                <a>
                  <img
                    src={`${process.env.NEXT_PUBLIC_SERVER}/${item.thumbnail}`}
                  />
                  <span>{item.title}</span>
                  <span>{FormatDate(item.created_at)}</span>
                </a>
              </Link>
            ) : null;
          })}
        </ul>
      </StyledSmallGallery>
    </>
  );
};

export default SmallGallery;
