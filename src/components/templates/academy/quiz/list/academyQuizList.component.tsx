import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AcademyQuizListComponentPropsType } from './academyQuizList.types';

import StyledAcademyQuizList from './academyQuizList.styled';

import Layout from 'Layouts';
import SelectList from 'Molecules/selectList';
import { Input, Button, File, Title } from 'Atoms';
import Link from 'next/link';
import { nanoid } from 'nanoid';

const AcademyQuizListComponent: React.FC<AcademyQuizListComponentPropsType> = (
  props,
) => {
  return (
    <>
      <Layout.Container style={{ paddingTop: '20px' }}>
        <StyledAcademyQuizList>
          <Title style={{ margin: '20px 0' }}>📚 퀴즈 목록</Title>
          <Layout.Content>
            <SelectList
              type="radio"
              boxHeight={'60vh'}
              id="quiz"
              name="quiz"
              selectList={props.quizList}
              handleClick={props.handleQuiz}
            />
            <section className="btns">
              <Button backColor="red" onClick={props.deleteQuiz}>
                삭제
              </Button>
            </section>
          </Layout.Content>
        </StyledAcademyQuizList>
      </Layout.Container>
    </>
  );
};

export default AcademyQuizListComponent;
