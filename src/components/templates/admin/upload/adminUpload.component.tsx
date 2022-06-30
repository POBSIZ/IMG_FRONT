import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  AdminUploadPropsType,
  AdminUploadComponentPropsType,
} from './adminUpload.types';

import Layout from 'Layouts';
import StyledAdminUpload from './adminUpload.styled';

import { Input, Button, File, Title } from 'Atoms';
import Link from 'next/link';
import { nanoid } from 'nanoid';

const AdminUploadComponent: React.FC<AdminUploadComponentPropsType> = (
  props,
) => {
  return (
    <>
      <Layout.Container>
        <StyledAdminUpload>
          <Title>엑셀 파일 업로드</Title>
          <form onSubmit={props.handleSubmit} acceptCharset="UTF-8">
            <File name="file" />
            <Button type="submit" backColor="primary">
              SUBMIT
            </Button>
          </form>
          {/* <Layout.Content>
            <ul>
              <li>
                <span>단어</span>
                <span>발음</span>
                <span>뜻</span>
              </li>
              {props.resList?.map((item) => {
                return (
                  <li key={nanoid()}>
                    <span>{item['단어']}</span>
                    <span>{item['발음']}</span>
                    <span>{item['주요뜻']}</span>
                  </li>
                );
              })}
            </ul>
          </Layout.Content> */}
          <Link href="/admins/quiz/create">퀴즈 생성 이동</Link>
        </StyledAdminUpload>
      </Layout.Container>
    </>
  );
};

export default AdminUploadComponent;
