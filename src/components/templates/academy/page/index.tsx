import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import AcademyPageComponent from './academyPage.component';
import { useAuth } from 'Hooks';

const AcademyPageTemplate: React.FC<any> = (props, {}) => {
  const auth = useAuth();

  return (
    <>
      <AcademyPageComponent authState={auth} {...props} />
    </>
  );
};

export default AcademyPageTemplate;
