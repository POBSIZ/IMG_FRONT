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
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

import StyledVocaList from './vocaList.styled';

import Layout from 'Layouts';
import { Title, Move } from 'Atoms';
import { FormatDate } from 'Utils';

import { QuizItem } from 'Templates/quiz/index/quiz.styled';

const VocaListTemplate: React.FC<any> = (props) => {
  return (
    <>
      <Layout.Container>
        <Title style={{ margin: '20px 0' }}>단어장 목록</Title>
        <Move
          href="/voca/create"
          backColor="primary"
          style={{ marginBottom: '20px' }}
        >
          단어장 생성
        </Move>
        <Layout.Content>
          <StyledVocaList>
            {props.vocaList.map((vc) => (
              <Link href={`/voca/${vc.voca_id}`} key={nanoid()}>
                <a style={{ textDecoration: 'none' }}>
                  <QuizItem isTry={true}>
                    <div>
                      <h3>{vc.name}</h3>
                      <p>{FormatDate(vc.created_at)}</p>
                    </div>
                  </QuizItem>
                </a>
              </Link>
            ))}
          </StyledVocaList>
        </Layout.Content>
      </Layout.Container>
    </>
  );
};

export default VocaListTemplate;
