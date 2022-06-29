import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from 'Layouts';
import StyledRegister from './register.styled';

import { IconInput, TextInput } from 'Molecules';
import { Button, Input } from 'Atoms';
import Link from 'next/link';

const RegisterComponent: React.FC<any> = (props) => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <Layout.Container>
        <StyledRegister>
          <section>
            <h1>회원가입</h1>
            <p>
              아래 입력란에 필수 정보를 모두 <br />
              기입하신 후 회원가입 해주세요.
            </p>
          </section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.handleSubmit(
                name,
                username,
                school,
                grade,
                phone,
                password,
              );
            }}
          >
            <TextInput
              text="이름"
              type="text"
              placeholder="이름"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextInput
              text="아이디"
              type="username"
              placeholder="아이디"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <TextInput
              text="학교"
              type="text"
              placeholder="학교"
              value={school}
              required
              onChange={(e) => {
                setSchool(e.target.value);
              }}
            />

            <TextInput
              text="학년"
              type="text"
              placeholder="학년"
              value={grade}
              required
              onChange={(e) => {
                setGrade(e.target.value);
              }}
            />

            <TextInput
              text="전화번호"
              type="text"
              placeholder="전화번호"
              value={phone}
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <TextInput
              text="비밀번호"
              type="password"
              placeholder="비밀번호"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button backColor="primary" type="submit">
              회원가입
            </Button>

            <Link className="login" href="/auth/login">
              로그인
            </Link>
          </form>
        </StyledRegister>
      </Layout.Container>
    </>
  );
};

export default RegisterComponent;
