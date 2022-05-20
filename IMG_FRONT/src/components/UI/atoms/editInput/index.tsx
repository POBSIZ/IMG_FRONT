import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import EditInputComponent from './editInput_component';

export interface EditInputPropsType {
  placeholder: string;
  maxText?: number;
  isDisabled: boolean;
}

const EditInput: React.FC<EditInputPropsType> = (props, {}) => {
  return (
    <>
      <EditInputComponent {...props} />
    </>
  );
};

export default EditInput;
