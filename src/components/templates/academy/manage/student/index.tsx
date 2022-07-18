import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import AcademyManageStudentComponent from './academyManageStudent.component';

const AcademyManageStudentTemplate: React.FC<any> = (props, {}) => {
  const handleSubmit = useCallback((_data) => {}, []);

  return (
    <>
      <AcademyManageStudentComponent
        {...props}
        userList={props.userList}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AcademyManageStudentTemplate;
