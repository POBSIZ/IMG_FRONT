import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  FormEvent,
} from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledUser, { UserItem, Info } from './adminManageAcademy.styled';
import Link from 'next/link';

import Layout from 'Layouts';
import { Title, Input, Button, Badge, Move, Back } from 'Atoms';
import { EditText } from 'Molecules';
import { FormatDate } from 'Utils';

const AdminManageAcademyComponent: React.FC<any> = (props) => {
  return (
    <Layout.Container>
      <Back style={{ margin: '20px 0', alignSelf: 'flex-start' }} />
      <form
        style={{
          display: 'flex',
          flexFlow: 'column',
          gap: '20px',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          props.handlePatch(e);
        }}
      >
        <h1>
          <EditText name="name">{props.academyInfo?.name}</EditText>
          <input
            name="academy_id"
            value={props.academyInfo?.academy_id}
            hidden
          />
        </h1>

        <Layout.Content>
          <h2>학원 정보</h2>
          <Info>
            <h4>관리자 :</h4>
            <span>{props.academyInfo?.president_name}</span>
          </Info>
          <Info>
            <h4>주소 :</h4>
            <EditText name="address">{props.academyInfo?.address}</EditText>
          </Info>
          <Info>
            <h4>상세주소 :</h4>
            <EditText name="address_detail">
              {props.academyInfo?.address_detail}
            </EditText>
          </Info>
          <Info>
            <h4>우편번호 :</h4>
            <EditText name="zip">{props.academyInfo?.zip}</EditText>
          </Info>
          <Info>
            <h4>전화번호 :</h4>
            <EditText name="phone">{props.academyInfo?.phone}</EditText>
          </Info>
          <Info>
            <h4>가입일 :</h4>
            <span>{FormatDate(props.academyInfo?.created_at)}</span>
          </Info>
        </Layout.Content>

        <Layout.Content>
          <h2>원생 목록 / {props.userList.length}명</h2>
          <StyledUser>
            <UserItem>
              <span>이름</span>
              <span>반</span>
            </UserItem>
            {props.userList?.map((item) => {
              return (
                <Link href={`/admins/user/${item.user_id}`} key={nanoid()}>
                  <UserItem>
                    <span>{item.name}</span>
                    <span>{item.class_id?.name}</span>
                  </UserItem>
                </Link>
              );
            })}
          </StyledUser>
        </Layout.Content>

        <Layout.Content>
          <h2>반 목록 / {props.classList.length}개</h2>
          <StyledUser>
            <UserItem>
              <span>반이름</span>
              <span>원생수</span>
            </UserItem>
            {props.classList?.map((item) => {
              return (
                <UserItem key={nanoid()}>
                  <span>{item.name}</span>
                  <span>{item.userCount}</span>
                </UserItem>
              );
            })}
          </StyledUser>
        </Layout.Content>
        <div className="btns">
          <Button type="submit" backColor="primary">
            저장
          </Button>
        </div>
      </form>
    </Layout.Container>
  );
};

export default AdminManageAcademyComponent;
