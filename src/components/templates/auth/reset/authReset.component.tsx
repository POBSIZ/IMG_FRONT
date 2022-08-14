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

import StyledAuthReset from './authReset.styled';

import Layout from 'Layouts';
import { Button } from 'Atoms';
import { TextInput } from 'Molecules';

const AuthResetComponent: React.FC<any> = (props) => {
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const memoForm = useMemo(() => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changePassword(username, phone, password);
        }}
      >
        <input hidden />
        <input hidden />
        <TextInput
          type="password"
          text="변경 비밀번호"
          placeholder="변경 비밀번호"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit" backColor="primary">
          변경하기
        </Button>
      </form>
    );
  }, [props.isValidate, password]);

  return (
    <>
      <Layout.Container>
        <StyledAuthReset>
          <section>
            <h1>비밀번호를 변경해드릴게요.</h1>
            {props.isValidate ? (
              <p>
                아래 입력란에 변경할 비밀번호를
                <br />
                입력하신 후 변경하기를 눌러주세요.
              </p>
            ) : (
              <p>
                아래 입력란에 아이디와 휴대폰 번호를
                <br />
                입력하신 후 인증을 해주세요.
              </p>
            )}
          </section>
          {props.isValidate ? (
            memoForm
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.getIsValidate(username, phone);
              }}
            >
              <TextInput
                type="username"
                text="아이디"
                placeholder="아이디"
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <TextInput
                type="phone"
                text="휴대폰 번호"
                placeholder="010-xxxx-xxxx"
                required
                value={phone}
                onChange={(e) => {
                  e.target.value.length > 13
                    ? null
                    : setPhone(
                        e.target.value
                          .replace(/[^0-9]/g, '')
                          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                          .replace(/(\-{1,2})$/g, ''),
                      );
                }}
              />
              <Button type="submit" backColor="primary">
                인증하기
              </Button>
            </form>
          )}
        </StyledAuthReset>
      </Layout.Container>
    </>
  );
};

export default AuthResetComponent;
