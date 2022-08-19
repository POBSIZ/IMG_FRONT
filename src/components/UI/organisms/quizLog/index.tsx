import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { nanoid } from 'nanoid';
import Layout from 'Layouts';
import { Button, Input, Move } from 'Atoms';
import Link from 'next/link';
import { CheckRole } from 'Hoc';
import { FormatDate } from 'Utils';

import { QuizLogItem } from 'Templates/profile/profile.styled';

import { QuizLogItemType } from 'Templates/profile';

const QuizLog: React.FC<{ quizLog: QuizLogItemType[] }> = (props) => {
  return (
    <>
      <Layout.Content>
        <h2>퀴즈 기록</h2>
        <ul
          style={{
            height: '50vh',
            overflow: 'hidden',
            overflowY: 'scroll',
            margin: '0',
            padding: '0',
          }}
        >
          {props?.quizLog?.map((item) => {
            return (
              <QuizLogItem key={nanoid()}>
                <section>
                  <span>{FormatDate(item.date, true)}</span>
                  <p>{item.title}</p>
                  <span>
                    {item.score} / {item.probCount}
                  </span>
                </section>
                <div>
                  <Link href={`/quiz/wrongResult?id=${item.quizLog_id}`}>
                    결과보기
                  </Link>

                  <Link
                    href={`/quiz/retry/${item.quiz_id}?title=${item.title}&uqid=${item.userQuiz_id}&qlid=${item.quizLog_id}`}
                  >
                    다시하기
                  </Link>

                  <a
                    href={`${process.env.NEXT_PUBLIC_SERVER}/auth/quiz/wrongList/excel/${item.quizLog_id}`}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
                </div>
              </QuizLogItem>
            );
          })}
        </ul>
      </Layout.Content>
    </>
  );
};

export default QuizLog;
