import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  FormEventHandler,
  FormEvent,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import AcademyQuizListComponent from './academyQuizList.component';
import { AcademyQuizListPropsType } from './academyQuizList.types';

import axios from 'axios';
import { Post } from 'Utils';
import { InputFiles } from 'typescript';
import { pushToastAsync } from 'Actions/toastAction';
import { useMethod } from 'Hooks';

const AcademyQuizListTemplate: React.FC<AcademyQuizListPropsType> = (props) => {
  const method = useMethod();
  const dispatch = useDispatch();

  const [quizId, setQuizId] = useState(NaN);

  const deleteQuiz = useCallback(async () => {
    const res = await method.DELETE(`/quiz/delete/${quizId}`);
    // console.log(res);
    dispatch(
      pushToastAsync.request({
        status: 'error',
        message: '퀴즈를 삭제 했습니다.',
      }),
    );
  }, [quizId]);

  const handleQuiz = useCallback((_idx, _title, _subtitle, _dataObj) => {
    setQuizId(_idx);
  }, []);

  return (
    <>
      <AcademyQuizListComponent
        handleQuiz={handleQuiz}
        deleteQuiz={deleteQuiz}
        {...props}
      />
    </>
  );
};

export default AcademyQuizListTemplate;
