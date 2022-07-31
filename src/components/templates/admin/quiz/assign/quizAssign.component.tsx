import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledQuizAssign from './quizAssign.styled';
import Layout from 'Layouts';
import { FilterBox } from 'Organisms';
import { UserList, SelectList, Directory } from 'Molecules';
import { Title, Button } from 'Atoms';

import {
  QuizAssignTempPropsType,
  QuizAssignCompPropsType,
} from './quizAssign.types';

const QuizAssignComponent: React.FC<QuizAssignCompPropsType> = (props) => {
  const [quizIdx, setQuizIdx] = useState<number>(NaN);
  const [selList, setSelList] = useState<any[]>([]);

  const handleQuizIdx = useCallback(
    (_idx, _title, _subtitle) => {
      setQuizIdx(_idx);
    },
    [props.userInfoList],
  );

  const userInfoList = useMemo(() => props.userInfoList, [props.userInfoList]);

  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>퀴즈 할당</Title>
      <StyledQuizAssign
        onSubmit={(e) => {
          props.handleSubmit(e, quizIdx, selList);
        }}
      >
        <Layout.Content
          style={{ display: 'flex', flexFlow: 'column', gap: '20px' }}
        >
          <h2>학생 목록</h2>
          <FilterBox list={userInfoList} getList={setSelList} depth={3} />
          <Button
            type="button"
            backColor="red"
            onClick={() => {
              props.handleDelete(Number(selList[2]?.data?.data?.userQuiz_id));
            }}
          >
            유저 퀴즈 삭제
          </Button>
        </Layout.Content>

        <Layout.Content
          style={{ display: 'flex', flexFlow: 'column', gap: '20px' }}
        >
          <h2>퀴즈 목록</h2>
          <SelectList
            name="quiz"
            type="radio"
            selectList={props.quizList}
            boxHeight="300px"
            handleClick={handleQuizIdx}
          />
          <Button backColor="primary">퀴즈 할당</Button>
        </Layout.Content>
      </StyledQuizAssign>
    </Layout.Container>
  );
};

export default React.memo(QuizAssignComponent);
