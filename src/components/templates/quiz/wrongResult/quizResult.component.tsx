import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faPlayCircle, faUser } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { QuizResultComponentPropsType } from './quizResult.types';
import { AnswerListItem } from '../play/quizPlay.types';

import StyledQuizResult, {
  IsWrongToggle,
  StyledAnswerList,
  StyledAnswerListHead,
  ResultNum,
  GoToProfile,
} from './quizResult.styled';

import Layout from 'Layouts';
import { Loader } from 'Bases';
import { Switch, Title } from 'Atoms';
import Link from 'next/link';

const QuizResultComponent: React.FC<QuizResultComponentPropsType> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [audioState, setAudioState] = useState<string>('');

  useEffect(() => {
    setIsLoading(false);
  }, [props.result]);

  return (
    <Layout.Container>
      <StyledQuizResult>
        <Title style={{ margin: '20px 0' }}>📝 {props.result.title} 결과</Title>

        <IsWrongToggle>
          <span>오답만 보기</span>
          <Switch
            name="isWrong"
            size="M"
            switchState={props.isWrong}
            handleSwitch={() => {
              setIsLoading(true);
              props.setIsWrong();
            }}
          />
        </IsWrongToggle>

        <ResultNum>
          {props.result?.corrCount} / {props.result?.list.length}{' '}
          <GoToProfile>
            <Link href="/profile">
              <a>
                <FontAwesomeIcon icon={faUser} /> 프로필로 이동
              </a>
            </Link>
          </GoToProfile>
        </ResultNum>

        {isLoading ? (
          <Loader />
        ) : (
          <StyledAnswerList>
            {props.result?.list?.map((item: AnswerListItem) => {
              return (
                <Layout.Content style={{ margin: '20px 0' }} key={nanoid()}>
                  <li>
                    <StyledAnswerListHead>
                      <div>
                        <span
                          className={
                            item?.answer[0] === item?.correctWordId
                              ? 'correct'
                              : 'wrong'
                          }
                        >
                          {item?.id + 1}
                        </span>
                        <FontAwesomeIcon
                          icon={faPlayCircle}
                          onClick={() => {
                            props.getAudio(item.correctWord);
                          }}
                        />
                      </div>
                      <h4>
                        {item?.correctWord} [{item?.diacritic}]
                      </h4>
                    </StyledAnswerListHead>
                    <ol>
                      {item?.options?.map((option: string, k: number) => {
                        return (
                          <li
                            key={nanoid()}
                            className={
                              k === item?.correctWordId
                                ? 'correct'
                                : k === item?.answer[0]
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
                </Layout.Content>
              );
            })}
          </StyledAnswerList>
        )}
      </StyledQuizResult>
    </Layout.Container>
  );
};

export default QuizResultComponent;
