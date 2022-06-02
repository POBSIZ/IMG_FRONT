import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { QuizResultComponentPropsType } from './quizResult.types';
import { AnswerListItem } from '../play/quizPlay.types';

import StyledQuizResult, {
  IsWrongToggle,
  StyledAnswerList,
  StyledAnswerListHead,
} from './quizResult.styled';

import Layout from 'Layouts';

import { Switch } from 'Atoms';

const QuizResultComponent: React.FC<QuizResultComponentPropsType> = (props) => {
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const resultList = useMemo(() => {
    return isWrong
      ? props.result.result.list.filter(
          (item) => item.answer[0] !== item.correctWordId,
        )
      : props.result.result.list;
  }, [isWrong]);

  return (
    <Layout.Container>
      <StyledQuizResult>
        <h1>📝 {props.result.result.title} 결과</h1>
        <IsWrongToggle>
          <span>오답만 보기</span>
          <Switch
            name="isWrong"
            size="M"
            switchState={isWrong}
            handleSwitch={setIsWrong}
          />
        </IsWrongToggle>
        <StyledAnswerList>
          {resultList.map((item: AnswerListItem, i) => {
            return (
              <li key={nanoid()}>
                <StyledAnswerListHead>
                  <span
                    className={
                      item.answer[0] === item.correctWordId
                        ? 'correct'
                        : 'wrong'
                    }
                  >
                    {item.id + 1}
                  </span>
                  <h4>
                    {item.options[item.correctWordId]} [{item.diacritic}]
                  </h4>
                  <FontAwesomeIcon icon={faPlayCircle} />
                </StyledAnswerListHead>
                <ol>
                  {item.options.map((option, k) => {
                    return (
                      <li
                        key={nanoid()}
                        className={
                          k === item.correctWordId
                            ? 'correct'
                            : k === item.answer[0]
                            ? 'wrong'
                            : ''
                        }
                      >
                        {k + 1}. {option}
                      </li>
                    );
                  })}
                </ol>
              </li>
            );
          })}
        </StyledAnswerList>
      </StyledQuizResult>
    </Layout.Container>
  );
};

export default QuizResultComponent;
