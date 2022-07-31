import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { QuizTemplatePropsType, QuizItemType } from './quiz.types';
import StyledQuiz, { QuizItem } from './quiz.styled';

import { useRouter } from 'next/router';
import { Title } from 'Atoms';
import { Loader } from 'Bases';
import Layout from 'Layouts';

const QuizComponent: React.FC<QuizTemplatePropsType> = (
  props: QuizTemplatePropsType,
) => {
  const router = useRouter();

  const handleClick = useCallback(
    (_id, _title, _uqid) => {
      router.push(`quiz/play/${_id}?title=${_title}&uqid=${_uqid}`, undefined, { shallow: true });
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
              {props.quizList?.map((item: QuizItemType, i) => {
                const isTry = item.tryCount > 0 ? true : false;
                const date = new Date(item.date).toDateString();
                // const date = new Date(item.date).toISOString();
                return (
                  <QuizItem
                    disabled={item.disabled}
                    key={nanoid()}
                    isTry={isTry}
                    onClick={() => {
                      item.disabled
                        ? null
                        : handleClick(
                            item.quiz_id,
                            item.title,
                            item.userQuiz_id,
                          );
                    }}
                  >
                    <div>
                      <h3>{item.title}</h3>
                      <p>{date}</p>
                      <div>
                        <span>{item.tryCount}회 응시</span>
                        <span>
                          최고 {item.solvedCount} / {item.maxCount}
                        </span>
                      </div>
                    </div>
                    <p>
                      {item.solvedCount === 0
                        ? 0
                        : ((item.solvedCount / item.maxCount) * 100).toFixed(0)}
                      %
                    </p>
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
