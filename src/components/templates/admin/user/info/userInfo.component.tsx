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

import StyledUserInfo, { Info } from './userInfo.styled';
import { UserInfoPropsType } from './userInfo.types';
import Link from 'next/link';

import Layout from 'Layouts';
import { Title, Input, Button, Badge, Select, Back } from 'Atoms';
import { EditText, Search } from 'Molecules';
import { CheckRole } from 'Hoc';

const UserInfoComponent: React.FC<any> = (props) => {
  const [academy, setAcademy] = useState<any>();

  const setAcademyResult = useCallback((_idx, _title, _subtitle, _dataObj) => {
    setAcademy(_dataObj);
  }, []);

  const MemoSearch = useMemo(
    () => (
      <Search
        text=""
        placeholder="학원 검색하기"
        getBaseUrl="/academy/search/"
        setSearchResult={setAcademyResult}
      />
    ),
    [],
  );

  return (
    <Layout.Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handlePatch(e);
        }}
      >
        <Back style={{ margin: '20px 0' }} />
        <Title style={{ margin: '20px 0' }}>
          <EditText name="name">{props.profile?.name}</EditText>
          <input name="user_id" value={props.profile?.user_id} hidden />
        </Title>
        <StyledUserInfo>
          <Layout.Content>
            <h2>회원정보</h2>
            <CheckRole role="admin">
              <Info>
                <h4>권한 :</h4>
                <span>{props.profile?.role}</span>
              </Info>
            </CheckRole>
            <Info>
              <h4>닉네임 :</h4>
              <span>
                <EditText name="nickname">{props.profile?.nickname}</EditText>
              </span>
            </Info>
            <Info>
              <h4>소속학원 :</h4>
              {academy ? (
                <>
                  <span>{academy.name}</span>
                  <input name="academy_id" value={academy.academy_id} hidden />
                </>
              ) : (
                <>
                  <span>{props.profile?.academy_id?.name}</span>
                  <input
                    name="academy_id"
                    value={props.profile?.academy_id?.academy_id}
                    hidden
                  />
                </>
              )}
              {MemoSearch}
            </Info>
            <Info>
              <h4>학교 :</h4>
              <EditText name="school">{props.profile?.school}</EditText>
            </Info>
            <Info>
              <h4>학년 :</h4>
              <Select name="grade">
                <option
                  value={props.profile?.grade}
                  selected
                  hidden
                  style={{ display: 'none' }}
                >
                  {props.profile?.grade}
                </option>
                <option value="1학년">1학년</option>
                <option value="2학년">2학년</option>
                <option value="3학년">3학년</option>
                <option value="4학년">4학년</option>
                <option value="5학년">5학년</option>
                <option value="6학년">6학년</option>
              </Select>
            </Info>
            <Info>
              <h4>전화번호 :</h4>
              <EditText name="phone" type="phone">
                {props.profile?.phone}
              </EditText>
            </Info>
          </Layout.Content>

          <div className="btns">
            {/* <Button type="button" backColor="red">
              삭제
            </Button> */}
            <Button type="submit" backColor="primary">
              저장
            </Button>
          </div>
        </StyledUserInfo>
      </form>
    </Layout.Container>
  );
};

export default UserInfoComponent;
