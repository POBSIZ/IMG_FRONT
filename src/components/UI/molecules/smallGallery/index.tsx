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
  const thumbFilter = props.list.filter((item) => item.thumbnail);

  return (
    <>
      <StyledSmallGallery>
        <p>{props.title}</p>
        <ul>
          {thumbFilter?.map((item, i) => {
            return i > props.limit - 1 ? null : (
              <Link href={`/board/content/${item.post_id}`} key={nanoid()}>
                <a>
                  <img
                    src={`${process.env.NEXT_PUBLIC_SERVER}/${item.thumbnail}`}
                  />
                  <span>{item.title}</span>
                </a>
              </Link>
            );
          })}
        </ul>
      </StyledSmallGallery>
    </>
  );
};

export default SmallGallery;
