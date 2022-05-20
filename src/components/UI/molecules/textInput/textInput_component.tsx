import React, { useState, useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { TextInputPropsType } from '.';
import StyledTextInput from './textInput_styled';

import Atoms, { Input, Select } from 'Atoms/index';

const TextInputComponent: React.FC<TextInputPropsType> = (
  props: TextInputPropsType,
) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [textInputType, setTextInputType] = useState({
    text: '아이디',
    type: 'username',
    name: ' username',
    placeholder: '아이디',
    warnning: '영문 및 숫자를 포함한 8자 이상이어야 합니다.',
  });

  const item = ['남자', '여자'];
  const text = {
    username: '아이디',
    password: '비밀번호',
    passwordCheck: '비밀번호 확인',
    email: '이메일',
  };
  const type = {
    username: 'username',
    password: 'password',
    passwordCheck: 'password',
    email: 'email',
  };
  const placeholder = {
    username: '아이디',
    password: '비밀번호',
    passwordCheck: '비밀번호 확인',
    email: 'e-mail',
  };
  const warnning = {
    username: '영문 및 숫자를 포함한 8자 이상이어야 합니다.',
    password: '영문 및 숫자를 포함한 8자 이상이어야 합니다.',
    passwordCheck: '영문 및 숫자를 포함한 8자 이상이어야 합니다.',
    email: '이메일',
  };
  const select_default = '선택해주세요';

  useEffect(() => {
    setTextInputType({
      text: text[props.type],
      type: type[props.type],
      name: props.type,
      placeholder: placeholder[props.type],
      warnning: warnning[props.type],
    });
    return () => {};
  }, []);

  return (
    <>
      <StyledTextInput {...props}>
        {props.type == 'gender' ? (
          <label className="line">
            <span className="gender">성별</span>
            <div className="line_container">
              <Select
                isFail={props.isFail}
                name="gender"
                placeholder={select_default}
                item={item}
              />
            </div>
          </label>
        ) : props.type == 'name' ? (
          <label className="line">
            <span className="name">이름</span>
            <div className="line_container">
              <div style={{ width: '100%' }}>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  isFail={props.first_name}
                  placeholder="성"
                  type="text"
                  name="first_name"
                />
              </div>
              <div style={{ width: '100%' }}>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  isFail={props.last_name}
                  placeholder="이름"
                  type="text"
                  name="last_name"
                />
              </div>
            </div>
          </label>
        ) : (
          <label className="line">
            <span className="username">{textInputType.text}</span>
            <div className="line_container">
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isFail={props.isFail}
                placeholder={textInputType.placeholder}
                type={textInputType.type}
                name={textInputType.name}
              />
            </div>
          </label>
        )}

        {props.warnning == true ? (
          <div className="warnning">
            <FontAwesomeIcon
              icon={faExclamationCircle as IconProp}
              style={{ marginRight: '5px' }}
            />
            {textInputType.warnning}
          </div>
        ) : null}
      </StyledTextInput>
    </>
  );
};

export default TextInputComponent;
