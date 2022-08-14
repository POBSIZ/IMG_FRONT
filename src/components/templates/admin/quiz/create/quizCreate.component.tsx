import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  FormEvent,
} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledQuizCreate, { TextInput, NumberInput } from './quizCreate.styled';

import Layout from 'Layouts';
import { Title, Input, Button, Badge, Back } from 'Atoms';
import { SelectList } from 'Molecules';
import { CreateQuizFilter } from 'Organisms';

import {
  QuizCreatePropsType,
  BookWordListType,
  QuizCreateResDataType,
} from './quizCreate.types';

import { useThrottle, useDebounce } from 'Hooks';
import { SelectListType } from 'Molecules/selectList';

const QuizCreateComponent: React.FC<QuizCreatePropsType> = (props) => {
  const [currBook, setCurrBook] = useState<SelectListType>({
    idx: NaN,
    title: '',
    subtitle: NaN,
  });

  const [quizOption, setQuizOption] = useState<Partial<QuizCreateResDataType>>({
    book_id: 0,
    scope: [0, 0],
    word_count: 0,
    type: 'IN_PREV',
    // max_options: 0,
  });

  // 퀴즈 설정
  const handleQuizOption = useCallback(
    (_scope, _word_count, _type) => {
      setQuizOption((state) => ({
        book_id: Number(currBook.idx),
        scope: _scope,
        word_count: _word_count,
        type: _type,
      }));
    },
    [currBook],
  );

  // 책 선택
  const handleBook = useCallback((_idx, _title, _subtitle) => {
    setCurrBook((_state) => ({
      idx: _idx,
      title: _title,
      subtitle: _subtitle,
    }));
  }, []);

  const quizTypeMap = {
    IN_PREV: '이전문제 포함',
    EX_PREV: '이전문제 제외',
    STATIC: '고정',
  };

  return (
    <Layout.Container style={{ paddingBottom: '20px' }}>
      <Back style={{ margin: '20px 0', alignSelf: 'flex-start' }} />
      <StyledQuizCreate
        onSubmit={(e) => {
          props.handleSubmit(e, quizOption);
        }}
      >
        <Title>🔧 퀴즈 생성</Title>

        <Layout.Content>
          <TextInput>
            <span>1. 퀴즈 제목</span>
            <Input
              required
              type="text"
              placeholder="퀴즈 제목"
              name={props.titleName}
            />
          </TextInput>
        </Layout.Content>

        <Layout.Content>
          <span className="m-title">2. 책 선택</span>
          <SelectList
            type="radio"
            boxHeight={300}
            id="book"
            name="book"
            selectList={props.bookList}
            handleClick={handleBook}
          />
        </Layout.Content>

        <Layout.Content>
          <TextInput>
            <span>3. 퀴즈 설정</span>
            <CreateQuizFilter
              maxWords={Number(currBook.subtitle)}
              setOption={handleQuizOption}
            />
            <div className="option">
              <p>
                출제범위 :{' '}
                {quizOption.scope ? (
                  <>
                    {quizOption.scope[0]} ~ {quizOption.scope[1]}
                  </>
                ) : null}
              </p>
              <p>문항수 : {quizOption.word_count}</p>
              <p>방식 : {quizTypeMap[quizOption.type ?? 'IN_PREV']}</p>
            </div>

            <TextInput style={{ marginTop: '20px' }}>
              <span>풀이시간 / 초</span>
              <Input
                required
                type="number"
                placeholder="풀이시간 / 초"
                name={props.timeName}
              />
            </TextInput>
          </TextInput>
        </Layout.Content>

        <Button type="submit" backColor="primary">
          퀴즈 생성
        </Button>
      </StyledQuizCreate>
    </Layout.Container>
  );
};

export default QuizCreateComponent;
