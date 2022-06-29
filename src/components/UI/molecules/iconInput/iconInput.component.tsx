import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { IconInputPropsType } from '.';
import StyledIconInput from './iconInput.styled';

import Atoms, { Input } from 'Atoms/index';

const IconInputComponent: React.FC<IconInputPropsType> = (
  props: IconInputPropsType,
) => {
  const typeSet = {
    username: {
      type: 'username',
      name: 'username',
      icon: faUser,
      placeholder: '아이디',
    },
    password: {
      type: 'password',
      name: 'password',
      icon: faLock,
      placeholder: '비밀번호',
    },
    'new-password': {
      type: 'new-password',
      name: 'new-password',
      icon: faLock,
      placeholder: '비밀번호',
    },
  };
  const inputType = typeSet[props.type];

  return (
    <>
      <StyledIconInput {...props}>
        <div className="icon-wrapper">
          <FontAwesomeIcon className="icon" icon={inputType.icon} />
        </div>
        <Input
          className="input"
          placeholder={inputType.placeholder}
          type={inputType.type}
          name={inputType.name}
          required={true}
          value={props.value}
          onChange={props.onChange}
        />
      </StyledIconInput>
    </>
  );
};

export default IconInputComponent;
