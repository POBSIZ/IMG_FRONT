import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  AdminBookListPropsType,
  AdminBookListComponentPropsType,
} from './adminBookList.types';

import StyledAdminBookList from './adminBookList.styled';

import Layout from 'Layouts';
import SelectList from 'Molecules/selectList';
import { Input, Button, File, Title } from 'Atoms';
import Link from 'next/link';
import { nanoid } from 'nanoid';

const AdminBookListComponent: React.FC<AdminBookListComponentPropsType> = (
  props,
) => {
  return (
    <>
      <Layout.Container style={{ paddingTop: '0px' }}>
        <StyledAdminBookList>
          <Title style={{ margin: '20px 0' }}>📚 책 목록</Title>
          <Layout.Content>
            <SelectList
              type="radio"
              boxHeight={'60vh'}
              id="book"
              name="book"
              selectList={props.bookList}
              handleClick={props.handleBook}
            />
            <section className="btns">
              {/* <Button backColor="primary">단어 보기</Button> */}
              <Button backColor="red" onClick={props.deleteBook}>
                삭제
              </Button>
            </section>
          </Layout.Content>
        </StyledAdminBookList>
      </Layout.Container>
    </>
  );
};

export default AdminBookListComponent;
