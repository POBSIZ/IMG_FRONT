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
import { Title, Input, Button, Badge } from 'Atoms';
import { SelectList } from 'Molecules';

import { QuizCreatePropsType, BookWordListType } from './quizCreate.types';

import { useThrottle, useDebounce } from 'Hooks';
import { SelectListType } from 'Molecules/selectList';

const QuizCreateComponent: React.FC<QuizCreatePropsType> = (props) => {
  // console.log('render');

  const debounce = useDebounce();

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const [amount, setAmount] = useState<number | string>(NaN);

  const [scopeAmount, setScopeAmount] = useState<[number, number]>([NaN, NaN]);

  const [currBook, setCurrBook] = useState<SelectListType>({
    idx: NaN,
    title: '',
    subtitle: NaN,
  });

  const [checkList, setCheckList] = useState<BookWordListType[]>([]);

  // 추가 템플릿
  const addCheckList = useCallback(
    (
      _amount: number | string,
      _isRandom: boolean,
      _isScope: boolean,
      _scope: [number, number],
    ) => {
      setCheckList((_state) => {
        _state.push({
          idx: currBook.idx,
          title: currBook.title,
          subtitle: currBook.subtitle,
          isRandom: _isRandom,
          isScope: _isScope,
          amount: _amount,
          scope: _scope,
        });
        return [..._state];
      });
      setAmount((_state) => NaN);
      setScopeAmount((_state) => [NaN, NaN]);
    },
    [],
  );

  // Check List 요소 삭제
  const deleteCheckList = useCallback((_i) => {
    setCheckList((_state) => {
      _state.splice(_i, 1);
      return [..._state];
    });
  }, []);

  // Input 변경
  const handleScopeInput = useCallback((e, _idx) => {
    setScopeAmount((_state) => {
      _state[_idx] =
        Number(e.target.value) > currBook.subtitle
          ? _state[_idx]
          : Number(e.target.value);

      return [..._state];
    });
  }, []);

  const handleRandInput = useCallback((e) => {
    setAmount((_state) => {
      return Number(e.target.value) > currBook.subtitle
        ? _state
        : e.target.value;
    });
  }, []);

  // 책 선택
  const handleBook = useCallback((_idx, _title, _subtitle) => {
    setCurrBook((_state) => {
      _state.idx = _idx;
      _state.title = _title;
      _state.subtitle = _subtitle;
      return _state;
    });
    setIsDisabled((_state) => false);
  }, []);

  const bookList = useMemo(() => {
    return props.bookList;
  }, [props.bookList]);

  return (
    <Layout.Container>
      <StyledQuizCreate
        onSubmit={(e) => {
          props.handleSubmit(e, checkList);
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
          <TextInput>
            <span>2. 풀이시간 / 초</span>
            <Input
              required
              type="number"
              placeholder="풀이시간 / 초"
              name={props.timeName}
            />
          </TextInput>
        </Layout.Content>

        <Layout.Content>
          <span className="m-title">3. 책 선택</span>
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
          <span className="m-title">4. 단어 선택</span>
          <Button
            type="button"
            backColor="primary"
            onClick={() => {
              addCheckList(Number(currBook.subtitle), false, false, [NaN, NaN]);
            }}
          >
            전체 선택
          </Button>

          <NumberInput>
            <Input
              type="number"
              placeholder="갯수"
              min="1"
              max={currBook.subtitle + ''}
              value={String(amount)}
              onChange={(e) => {
                handleRandInput(e);
              }}
              disabled={isDisabled}
            />
            <Button
              type="button"
              backColor="primary"
              onClick={() => {
                addCheckList(Number(amount), true, false, [NaN, NaN]);
              }}
            >
              랜덤
            </Button>
          </NumberInput>

          <NumberInput>
            <div>
              <Input
                type="number"
                placeholder="범위 1"
                min="1"
                max={currBook.subtitle + ''}
                value={String(scopeAmount[0])}
                onChange={(e) => {
                  handleScopeInput(e, 0);
                }}
                disabled={isDisabled}
              />
              <Input
                type="number"
                placeholder="범위 2"
                min="1"
                max={currBook.subtitle + ''}
                value={String(scopeAmount[1])}
                onChange={(e) => {
                  handleScopeInput(e, 1);
                }}
                disabled={isDisabled}
              />
            </div>
            <Button
              type="button"
              backColor="primary"
              onClick={() => {
                addCheckList(NaN, false, true, scopeAmount);
              }}
            >
              지정
            </Button>
          </NumberInput>

          <Layout.Content style={{ marginBottom: '10px' }}>
            <ul>
              {checkList?.map((item, i) => {
                return (
                  <Badge backColor="primary" key={nanoid()}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      onClick={() => {
                        deleteCheckList(i);
                      }}
                    />
                    <span>
                      {item.title} /{' '}
                      {item.isScope
                        ? item.scope[1] - item.scope[0] < 0
                          ? 0
                          : item.scope[1] - item.scope[0] + 1
                        : item.amount}{' '}
                      단어 {item.isRandom ? '랜덤' : null}
                    </span>
                  </Badge>
                );
              })}
            </ul>
          </Layout.Content>

          <Button backColor="primary" type="submit">
            퀴즈 생성
          </Button>
        </Layout.Content>
      </StyledQuizCreate>
    </Layout.Container>
  );
};

export default QuizCreateComponent;
