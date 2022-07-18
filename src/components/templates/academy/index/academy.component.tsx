import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledAcademy from './academy.styled';
import Link from 'next/link';
import Layout from 'Layouts';
import { Move } from 'Atoms';

const AcademyComponent: React.FC<any> = (props) => {
  return (
    <Layout.Container>
      <StyledAcademy>
        {props.authState.profile.academy_id ? (
          <>
            <Move href="/academy/book/upload" backColor="primary">
              📚 책 관리
            </Move>

            <Move href="/academy/quiz/create" backColor="primary">
              📝 퀴즈 생성
            </Move>

            <Move href="/academy/quiz/assign" backColor="primary">
              📮 퀴즈 할당
            </Move>

            <Move href="/academy/quiz/list" backColor="primary">
              🏪 퀴즈 관리
            </Move>

            <Move href="/academy/manage/student" backColor="primary">
              📦 학생 & 반 관리
            </Move>

            {/* <Move href="/academy/manage/class" backColor="primary">
              📦 반 관리
            </Move> */}
          </>
        ) : (
          <Move href="/academy/create" backColor="primary">
            🏠 학원 생성
          </Move>
        )}
      </StyledAcademy>
    </Layout.Container>
  );
};

export default AcademyComponent;
