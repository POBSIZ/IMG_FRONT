import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import IconInputComponent from './iconInput.component';

export interface IconInputPropsType {
  type: 'username' | 'password';
  value: string | number | null;
  onChange: <T>(T: any) => void;
}

const IconInput: React.FC<IconInputPropsType> = (
  props,
  { type }: IconInputPropsType,
) => {
  return (
    <>
      <IconInputComponent {...props} />
    </>
  );
};

export default IconInput;
