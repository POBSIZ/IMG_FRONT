import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import AcademyComponent from './academy.component';

const AcademyTemplate: React.FC<any> = (props, {}) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  return (
    <>
      <AcademyComponent authState={authState} {...props} />
    </>
  );
};

export default AcademyTemplate;
