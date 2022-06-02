import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import LoginComponent from './login.component';
import { LoginPropsType } from './login.types';

const LoginTemplate: React.FC<LoginPropsType> = (props) => {
  return (
    <>
      <LoginComponent {...props} />
    </>
  );
};

export default LoginTemplate;
