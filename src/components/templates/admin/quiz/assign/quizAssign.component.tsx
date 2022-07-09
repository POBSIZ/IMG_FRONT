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
import { UserList, SelectList } from 'Molecules';
import { Title, Button } from 'Atoms';

import {
  QuizAssignTempPropsType,
  QuizAssignCompPropsType,
} from './quizAssign.types';

const QuizAssignComponent: React.FC<QuizAssignCompPropsType> = (props) => {
  const [quizIdx, setQuizIdx] = useState<number>(NaN);
  const handleQuizIdx = useCallback((_idx, _title, _subtitle) => {
    setQuizIdx(_idx);
  }, []);

  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>퀴즈 할당</Title>
      <StyledQuizAssign
        onSubmit={(e) => {
          props.handleSubmit(e, quizIdx);
        }}
      >
        <Layout.Content>
          <h2>학생 목록</h2>
          <UserList list={props.userList} name="user" />
        </Layout.Content>

        <Layout.Content>
          <h2>퀴즈 목록</h2>
          <SelectList
            name="quiz"
            type="radio"
            selectList={props.quizList}
            boxHeight="300px"
            handleClick={handleQuizIdx}
          />
        </Layout.Content>

        <Button backColor="primary">퀴즈 할당</Button>
      </StyledQuizAssign>
    </Layout.Container>
  );
};

export default QuizAssignComponent;
