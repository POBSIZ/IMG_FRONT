import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import {
  QuizPlayTemplatePropsType,
  QuizItemType,
  AnswerListItem,
} from './quizPlay_types';
import StyledQuiz, { QuizWord, QuizOptions, QuizControl } from './quizPlay_styled';

import { Timer, Button } from 'Atoms';
import { ListTab } from 'Molecules';

const QuizComponent: React.FC<QuizPlayTemplatePropsType> = (
  props: QuizPlayTemplatePropsType,
) => {
  const [timer, setTimer] = useState<number>(props.limitTime);
  const [currNum, setCurrNum] = useState<number>(0);
  const [answerList, setAnswerList] = useState<AnswerListItem[]>([]);

  // console.log(answerList);

  const nextWord = () => {
    if (currNum + 1 < props.quizList.length) {
      setCurrNum((state) => ++state);
      setTimer((state) => props.limitTime);
    }
  };

  const prevWord = () => {
    if (currNum > 0) {
      setCurrNum((state) => --state);
      setTimer((state) => props.limitTime);
    }
  };

  useEffect(() => {
    if (timer < 1 && currNum + 1 < props.quizList.length) {
      setAnswerList((state) => {
        state[currNum] = {
          id: null,
          answer: null,
          isCorrect: false,
        };
        return state;
      });
      nextWord();
    } else {
    }
  }, [timer]);

  const handleOption = (item: string, i: number, _currNum: number) => {
    if (timer !== 0 && _currNum + 1 < props.quizList.length) {
      setAnswerList((state) => {
        state[_currNum] = {
          id: i,
          answer: [i, item],
          isCorrect: props.quizList[_currNum].answer == i,
        };
        return state;
      });
      nextWord();
    } else {
    }
  };

  return (
    <StyledQuiz>
      <Timer count={timer} handleCount={setTimer} />
      <QuizWord>
        <h1>{props.quizList[currNum].word}</h1>
        <h3>[{props.quizList[currNum].diacritic}]</h3>
      </QuizWord>
      <QuizOptions>
        {props.quizList[currNum].options?.map((item, i) => {
          return (
            <Button
              key={nanoid()}
              backColor="primary"
              onClick={() => {
                handleOption(item, i, currNum);
              }}
            >
              {i + 1}. {item}
            </Button>
          );
        })}
      </QuizOptions>
      <QuizControl>
        <Button backColor="black" onClick={prevWord}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <Button backColor="black" onClick={nextWord}>
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </QuizControl>
      <ListTab maxNum={props.quizList.length} currNum={currNum + 1} />
    </StyledQuiz>
  );
};

export default QuizComponent;
