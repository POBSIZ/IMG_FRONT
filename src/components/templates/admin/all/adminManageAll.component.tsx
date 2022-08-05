import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import { nanoid } from 'nanoid';

import Layout from 'Layouts';
import StyledUser, { UserItem } from './user.styled';
import { Back } from 'Atoms';

const AdminManageAllComponent: React.FC<any> = (props) => {
  return (
    <>
      <Layout.Container>
        <Back style={{ margin: '20px 0', alignSelf: 'flex-start' }} />
        <Layout.Content>
          <h1>학원 목록</h1>
          <StyledUser>
            <UserItem>
              <span>이름</span>
              <span>원생수</span>
            </UserItem>
            {props.academyList?.map((item) => {
              return (
                <Link
                  href={`/admins/academy/${item.academy_id}`}
                  key={nanoid()}
                >
                  <UserItem>
                    <span>{item.name}</span>
                    <span>{item.userCount}명</span>
                  </UserItem>
                </Link>
              );
            })}
          </StyledUser>
        </Layout.Content>
      </Layout.Container>
    </>
  );
};

export default AdminManageAllComponent;
