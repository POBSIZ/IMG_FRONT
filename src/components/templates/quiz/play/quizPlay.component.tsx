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
  QuizPlayComponentPropsType,
} from './quizPlay.types';
import StyledQuiz, {
  QuizWord,
  QuizOptions,
  QuizControl,
  QuizTitle,
} from './quizPlay.styled';

import { Timer, Button } from 'Atoms';
import { ListTab } from 'Molecules';
import Layout from 'Layouts';

import { useRouter } from 'next/router';

const QuizPlayComponent: React.FC<QuizPlayComponentPropsType> = (props) => {
  const router = useRouter();

  const [timer, setTimer] = useState<number>(props.limitTime); // 타이머 시간
  const [currNum, setCurrNum] = useState<number>(0); // 현재 단어 id
  const [answerList, setAnswerList] = useState<AnswerListItem[]>([]); // 제출 데이터
  const [prevState, setPrevState] = useState<boolean>(true); // 이전 단어 버튼 사용 유무

  // console.log('Render: QuizPlayComponent');
  console.log(answerList);

  const handleAnswerList = useCallback(
    (_currNum: number, _answer: [number, string] | []) => {
      setAnswerList((state) => {
        state[_currNum] = {
          id: _currNum,
          answer: _answer,
          correctWordId: props.quizList[_currNum].answer,
          options: props.quizList[_currNum].options,
          diacritic: props.quizList[_currNum].diacritic,
        };
        return state;
      });
    },
    [],
  );

  // 단어 리덕스 저장
  const saveAnwerList = useCallback(
    (_currNum: number, _answer: [number, string] | []) => {
      if (answerList.length + 1 >= props.quizList.length) {
        let _answerList: AnswerListItem[] = Object.assign([], answerList);
        _answerList[_currNum] = {
          id: _currNum,
          answer: _answer,
          correctWordId: props.quizList[_currNum].answer,
          options: props.quizList[_currNum].options,
          diacritic: props.quizList[_currNum].diacritic,
        };
        props.handleSave(_answerList);
        router.push('/quiz/result');
      }
    },
    [answerList],
  );

  // 다음 단어
  const nextWord = useCallback(
    (isButton: boolean) => {
      if (
        currNum + 1 < props.quizList.length &&
        answerList.length < props.quizList.length
      ) {
        if (!isButton) handleAnswerList(currNum, [NaN, '']);
        setCurrNum((state) => ++state);
        setTimer((state) => props.limitTime);
      } else {
        saveAnwerList(currNum, [NaN, '']);
      }
    },
    [currNum],
  );

  // 이전 단어
  const prevWord = useCallback(() => {
    if (currNum > 0) {
      setCurrNum((state) => --state);
      setTimer((state) => props.limitTime);
      setPrevState((state) => false);
    }
  }, [currNum]);

  // 타이머 시간 초과시 실행
  useEffect(() => {
    if (
      timer <= 0 &&
      currNum + 1 < props.quizList.length &&
      answerList.length < props.quizList.length
    ) {
      nextWord(false);
    } else {
      saveAnwerList(currNum, [NaN, '']);
    }
  }, [timer < 1]);

  // 단어 선택시 실행
  const handleOption = useCallback(
    (item: string, i: number, _currNum: number) => {
      if (timer !== 0 && _currNum + 1 < props.quizList.length) {
        handleAnswerList(_currNum, [i, item]);
        nextWord(true);
      } else {
        saveAnwerList(_currNum, [i, item]);
      }
    },
    [],
  );

  return (
    <Layout.Container>
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
          {prevState ? (
            <Button
              backColor="black"
              onClick={prevWord}
              isDisabled={!prevState}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
          ) : null}
          <Button
            backColor="black"
            onClick={() => {
              nextWord(false);
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </QuizControl>
        <ListTab maxNum={props.quizList.length} currNum={currNum + 1} />
        <QuizTitle>{props.quizTitle}</QuizTitle>
      </StyledQuiz>
    </Layout.Container>
  );
};

export default QuizPlayComponent;
