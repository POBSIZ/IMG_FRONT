import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import IconInputComponent from './iconInput_component';

export interface IconInputPropsType {
  type: 'username' | 'password';
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
