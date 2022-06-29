import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from 'Layouts';
import StyledLogin from './login.styled';

import { IconInput } from 'Molecules';
import { Button } from 'Atoms';
import Link from 'next/link';

const LoginComponent: React.FC<any> = (props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <Layout.Container>
        <StyledLogin>
          <section>
            <h1>안녕하세요</h1>
            <p>
              아래 입력란에 아이디와 비밀번호를 <br />
              입력하신 후 로그인 해주세요.
            </p>
          </section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.handleSubmit(username, password);
            }}
          >
            <IconInput
              type="username"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <IconInput
              type="password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button backColor="primary" type="submit">
              로그인
            </Button>
            <Link className="register" href='/auth/register'>회원가입</Link>
          </form>
        </StyledLogin>
      </Layout.Container>
    </>
  );
};

export default LoginComponent;
