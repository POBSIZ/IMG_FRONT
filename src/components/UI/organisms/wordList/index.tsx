import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { nanoid } from 'nanoid';

import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledWordList from './wordList.styled';

import Layout from 'Layouts';
import { SetStateType } from 'Types';

export interface WordListItemType {
  label: [string, number];
  word: string;
  meaning: string;
  phonetic: string;
}

export interface WordListPropsType {
  list: WordListItemType[];
  setList: SetStateType;
}

const WordList: React.FC<WordListPropsType> = (props) => {
  const handleDelete = (_i) => {
    props.setList((prev) => {
      const del = prev[_i];
      return prev.filter((pr) => pr !== del);
    });
  };

  return (
    <>
      <StyledWordList>
        <Layout.Content>
          <ul>
            <li>
              <span>번호</span>
              <span>단어</span>
              <span>발음기호</span>
              <span>뜻</span>
            </li>

            {props.list.map((item, i) => (
              <li key={nanoid()}>
                <span>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faCircleXmark}
                    onClick={() => {
                      handleDelete(i);
                    }}
                  />{' '}
                  {item.label[0]}
                </span>
                <span>{item.word}</span>
                <span>{item.phonetic}</span>
                <span>{item.meaning}</span>
              </li>
            ))}
          </ul>
        </Layout.Content>
      </StyledWordList>
    </>
  );
};

export default WordList;
