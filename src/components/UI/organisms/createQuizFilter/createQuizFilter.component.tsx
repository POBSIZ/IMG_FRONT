import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledCreateQuizFilter, { Option } from './createQuizFilter.styled';
import { FilterBoxPropsType } from '.';

import Layout from 'Layouts';
import { Check, Input, Button } from 'Atoms';
import { SelectList } from 'Molecules';
import { FormatDate } from 'Utils';

const CreateQuizFilterComponent: React.FC<FilterBoxPropsType> = (props) => {
  const [scope, setScope] = useState<[number, number] | null>(null);
  const [inputScope, setInputScope] = useState<[number, number] | null>(null);
  const [scopeDisable, setScopeDisable] = useState<boolean>(true);

  const [wordCount, setWordCount] = useState<number | null>(null);
  const [inputWordCount, setInputWordCount] = useState<number | null>(null);
  const [wordCountDisable, setWordCountDisable] = useState<boolean>(true);

  const [quizType, setQuizType] = useState<
    'IN_PREV' | 'EX_PREV' | 'STATIC' | null
  >(null);

  useEffect(() => {
    setWordCount(null);
  }, [scope]);

  const MemoD1SL = useMemo(() => {
    return (
      <>
        <Layout.Content
          style={{ display: 'flex', flexFlow: 'column', gap: '10px' }}
        >
          <h2>출제범위</h2>

          <Option>
            <Check
              type="radio"
              scale="L"
              name="scope"
              id="scope1"
              onChange={() => {
                setScope([1, props.maxWords]);
                setScopeDisable(true);
              }}
            />
            <label htmlFor="scope1">전체</label>
          </Option>

          <Option style={{ flexFlow: 'column' }}>
            <Option>
              <Check
                type="radio"
                scale="L"
                name="scope"
                id="scope2"
                onChange={() => {
                  setScopeDisable(false);
                  setScope(inputScope);
                }}
              />
              <label htmlFor="scope2">범위</label>
            </Option>
            <Option>
              <Input
                type="number"
                placeholder="범위 1"
                min="1"
                max={props.maxWords + ''}
                disabled={scopeDisable}
                onChange={(e) => {
                  setInputScope((state) => [
                    Number(e.target.value),
                    state !== null ? state[1] : 0,
                  ]);
                  !scopeDisable
                    ? setScope((state) => [
                        Number(e.target.value),
                        state !== null ? state[1] : 0,
                      ])
                    : null;
                }}
              />
              <Input
                type="number"
                placeholder="범위 2"
                min="1"
                max={props.maxWords + ''}
                disabled={scopeDisable}
                onChange={(e) => {
                  setInputScope((state) => [
                    state !== null ? state[0] : 0,
                    Number(e.target.value),
                  ]);
                  !scopeDisable
                    ? setScope((state) => [
                        state !== null ? state[0] : 0,
                        Number(e.target.value),
                      ])
                    : null;
                }}
              />
            </Option>
          </Option>
        </Layout.Content>
      </>
    );
  }, [scope, scopeDisable, props]);

  const MemoD2SL = useMemo(() => {
    return (
      <>
        <FontAwesomeIcon icon={faAngleRight} />
        <Layout.Content
          style={{ display: 'flex', flexFlow: 'column', gap: '10px' }}
        >
          <h2>문항수</h2>
          <Option>
            <Check
              type="radio"
              scale="L"
              name="wordCount"
              id="wordCount1"
              onChange={() => {
                setWordCount(
                  (scope !== null ? scope[1] : 0) +
                    1 -
                    (scope !== null ? scope[0] : 0) ?? 0,
                );
                setWordCountDisable(true);
              }}
            />
            <label htmlFor="wordCount1">전체</label>
          </Option>

          <div style={{ display: 'flex', flexFlow: 'column', gap: '10px' }}>
            <Option>
              <Check
                type="radio"
                scale="L"
                name="wordCount"
                id="wordCount2"
                onChange={() => {
                  setWordCount(inputWordCount);
                  setWordCountDisable(false);
                }}
              />
              <label htmlFor="wordCount2">문제수</label>
            </Option>
            <Input
              type="number"
              placeholder="문제수"
              min="1"
              max={
                (scope !== null ? scope[1] : 0) +
                  1 -
                  (scope !== null ? scope[0] : 0) ?? 0 + ''
              }
              disabled={wordCountDisable}
              onChange={(e) => {
                setInputWordCount(Number(e.target.value));
                !wordCountDisable ? setWordCount(Number(e.target.value)) : null;
              }}
            />
          </div>
        </Layout.Content>
      </>
    );
  }, [scope, wordCount, props]);

  const MemoD3SL = useMemo(() => {
    return (
      <>
        <FontAwesomeIcon icon={faAngleRight} />
        <Layout.Content
          style={{ display: 'flex', flexFlow: 'column', gap: '10px' }}
        >
          <h2>방식</h2>
          <Option>
            <Check
              type="radio"
              scale="L"
              name="quizType"
              id="quizType1"
              onChange={() => {
                setQuizType('EX_PREV');
              }}
            />
            <label htmlFor="quizType1">이전문제 제외</label>
          </Option>

          <Option>
            <Check
              type="radio"
              scale="L"
              name="quizType"
              id="quizType2"
              onChange={() => {
                setQuizType('IN_PREV');
              }}
            />
            <label htmlFor="quizType2">이전문제 포함</label>
          </Option>

          <Option>
            <Check
              type="radio"
              scale="L"
              name="quizType"
              id="quizType3"
              onChange={() => {
                setQuizType('STATIC');
              }}
            />
            <label htmlFor="quizType3">문제 고정</label>
          </Option>
        </Layout.Content>
      </>
    );
  }, [quizType, props]);

  return (
    <>
      <StyledCreateQuizFilter>
        {MemoD1SL}
        {MemoD2SL}
        {MemoD3SL}
      </StyledCreateQuizFilter>

      <Button
        type="button"
        backColor="primary"
        isDisabled={
          scope !== null && wordCount !== null && quizType !== null
            ? false
            : true
        }
        onClick={() => {
          props.setOption(scope, wordCount, quizType);
        }}
      >
        설정 적용
      </Button>
    </>
  );
};

export default CreateQuizFilterComponent;
