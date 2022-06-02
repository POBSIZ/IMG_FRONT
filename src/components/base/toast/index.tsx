import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ToastComponent from './toast.component';

import { initToast } from 'Actions/toastAction';

export interface ToastPropsTypes {
  isPop: boolean;
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

const Toast: React.FC<any> = (props, {}) => {
  const dispatch = useDispatch();
  const toast_state = useSelector(
    (state: RootStateOrAny) => state.toastReducer,
  );

  const [initState, setInitState] = useState(false);

  useEffect(() => {
    if (toast_state.isPop === true && initState === false) {
      setInitState(true);
      setTimeout(() => {
        dispatch(initToast());
        setInitState(false);
      }, 2000);
    }
    return () => {};
  }, [toast_state]);

  return (
    <>
      <ToastComponent {...props} {...toast_state} />
    </>
  );
};

export default Toast;
