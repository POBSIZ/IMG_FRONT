import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faCheckCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { QuizTemplatePropsType, QuizItemType } from './quiz.types';
import StyledQuiz, { QuizItem } from './quiz.styled';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Title, Move } from 'Atoms';
import { Loader } from 'Bases';
import Layout from 'Layouts';
import { FormatDate } from 'Utils';

const QuizComponent: React.FC<QuizTemplatePropsType> = (
  props: QuizTemplatePropsType,
) => {
  const router = useRouter();

  const handleClick = useCallback(
    (_id, _title, _uqid) => {
      router.push(`quiz/play/${_id}?title=${_title}&uqid=${_uqid}`, undefined, {
        shallow: true,
      });
    },
    [props.quizList],
  );

  return (
    <Layout.Container>
      <StyledQuiz>
        <Title>📚 퀴즈 목록</Title>
        <Layout.Content>
          {props.isLoading ? (
            <Loader />
          ) : (
            <ul>
              {props.quizList
                ?.filter((item) => !item.disabled)
                .map((item: QuizItemType, i) => {
                  const isTry = item.tryCount > 0 ? true : false;
                  return (
                    <QuizItem
                      disabled={item.disabled}
                      key={nanoid()}
                      isTry={isTry}
                    >
                      <Link
                        href={`quiz/play/${item.quiz_id}?title=${item.title}&uqid=${item.userQuiz_id}`}
                        shallow={true}
                      >
                        <a>
                          <h3>{item.title}</h3>
                          <p>{FormatDate(item.date)}</p>
                          <div>
                            <span>{item.tryCount}회 중 최고 기록 : </span>
                            <span>
                              {item.solvedCount} / {item.maxCount}
                            </span>
                          </div>
                        </a>
                      </Link>
                      <div className="opt">
                        <Link href="profile">
                          <a>
                            이전기록 보기{'  '}
                            <FontAwesomeIcon icon={faAngleRight} />
                          </a>
                        </Link>
                        {item.is_voca && (
                          <Link href={`/voca/${item.voca_id}`}>
                            <a>
                              단어장 보러가기{'  '}
                              <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                          </Link>
                        )}
                        <p>
                          {item.solvedCount === 0
                            ? 0
                            : (
                                (item.solvedCount / item.maxCount) *
                                100
                              ).toFixed(0)}
                          점
                        </p>
                      </div>
                    </QuizItem>
                  );
                })}
            </ul>
          )}
        </Layout.Content>
      </StyledQuiz>
    </Layout.Container>
  );
};

export default QuizComponent;
