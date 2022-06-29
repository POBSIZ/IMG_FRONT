import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {
  faAngleRight,
  faAngleLeft,
  faClock,
  faList,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
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
import { Modal } from 'Organisms';
import Layout from 'Layouts';
import { BlockChangePage } from 'Hoc';

const QuizPlayComponent: React.FC<QuizPlayComponentPropsType> = (props) => {
  const [modalState, setModalState] = useState<boolean>(true);

  const audioRef: { current: HTMLAudioElement | null } = useRef(null); // audio 객체 지정

  const [timer, setTimer] = useState<number>(props.limitTime); // 타이머 시간
  const [currNum, setCurrNum] = useState<number>(0); // 현재 단어 id
  const [answerList, setAnswerList] = useState<AnswerListItem[]>([]); // 제출 데이터
  const [prevState, setPrevState] = useState<boolean>(true); // 이전 단어 버튼 사용 유무

  // Audio 플레이 함수
  const handleAudio = useCallback(() => {
    const audioTime = setTimeout(() => {
      audioRef?.current?.play();
    }, 1000);
    timer < 2 ? clearTimeout(audioTime) : audioTime;
  }, [audioRef.current]);

  // Audio 이벤트
  useEffect(() => {
    audioRef?.current?.addEventListener('ended', handleAudio);
    return () => {
      removeEventListener('ended', handleAudio);
    };
  }, [audioRef]);

  // AnswerList State 변경
  const handleAnswerList = useCallback(
    (_currNum: number, _answer: [number, string] | []) => {
      if (props.quizList[_currNum].answer === _answer[0]) {
      }
      setAnswerList((state) => {
        state[_currNum] = {
          id: _currNum,
          prob_id: props.quizList[_currNum].prob_id,
          answer: _answer,
          correctWordId: props.quizList[_currNum].answer,
          correctWord: props.quizList[_currNum].word,
          options: props.quizList[_currNum].options,
          diacritic: props.quizList[_currNum].diacritic,
          audio: props.quizList[_currNum].audio,
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
          prob_id: props.quizList[_currNum].prob_id,
          answer: _answer,
          correctWordId: props.quizList[_currNum]?.answer,
          correctWord: props.quizList[_currNum].word,
          options: props.quizList[_currNum]?.options,
          diacritic: props.quizList[_currNum]?.diacritic,
          audio: props.quizList[_currNum]?.audio,
        };
        props.handleSave(_answerList);
        props.router.push('/quiz/result');
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
      currNum + 1 < props.quizList?.length &&
      answerList.length < props.quizList?.length
    ) {
      nextWord(false);
    } else {
      saveAnwerList(currNum, [NaN, '']);
    }
  }, [timer < 1]);

  // 단어 선택시 실행
  const handleOption = useCallback(
    (item: string, i: number, _currNum: number) => {
      if (timer !== 0 && _currNum + 1 < props.quizList?.length) {
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
        <Modal
          title="주의사항"
          openState={modalState}
          setOpenState={() => {
            setModalState(false);
          }}
        >
          <>
            <section>
              <div>
                <FontAwesomeIcon icon={faClock} />
                <span>제한시간</span>
                <span>{props.limitTime}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faList} />
                <span>문제수</span>
                <span>{props.quizList.length}</span>
              </div>
            </section>
            <Button
              backColor="primary"
              onClick={() => {
                setModalState(false);
              }}
            >
              퀴즈 시작
            </Button>
          </>
        </Modal>

        {modalState ? null : <Timer count={timer} handleCount={setTimer} />}

        <QuizWord>
          <h1>{props.quizList[currNum]?.word}</h1>
          <h3>[{props.quizList[currNum]?.diacritic}]</h3>
        </QuizWord>

        <QuizOptions>
          {props.quizList[currNum]?.options?.map((item, i) => {
            return (
              <Button
                key={nanoid()}
                backColor="primary"
                onClick={() => {
                  handleOption(item, i, currNum);
                }}
              >
                {item}
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

        <ListTab maxNum={props.quizList?.length} currNum={currNum + 1} />

        <QuizTitle>{props.quizTitle}</QuizTitle>

        <audio
          src={!modalState ? props.quizList[currNum]?.audio : undefined}
          autoPlay={true}
          loop={false}
          ref={audioRef}
        ></audio>
      </StyledQuiz>
    </Layout.Container>
  );
};

export default QuizPlayComponent;
