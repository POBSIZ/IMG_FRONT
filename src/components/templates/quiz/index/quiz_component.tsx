import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { QuizTemplatePropsType, QuizItemType } from './quiz_types';
import StyledQuiz, { QuizItem } from './quiz_styled';

const QuizComponent: React.FC<QuizTemplatePropsType> = (
  props: QuizTemplatePropsType,
) => {
  return (
    <StyledQuiz>
      <h1>QUIZ LIST</h1>
      <ul>
        {props.quizList.map((item: QuizItemType, i) => {
          const isRetry = item.tryCount > 1 ? true : false;
          const isTry = item.tryCount > 0 ? true : false;
          return (
            <QuizItem key={nanoid()} isTry={isTry}>
              <div>
                <h3>{item.title}</h3>
                <span>{isRetry ? `재시 ${item.tryCount - 1}` : '정규'}</span>
                <p>{isTry ? '제출 완료' : '미제출'}</p>
              </div>
              <FontAwesomeIcon icon={faCheckCircle} />
            </QuizItem>
          );
        })}
      </ul>
    </StyledQuiz>
  );
};

export default QuizComponent;
