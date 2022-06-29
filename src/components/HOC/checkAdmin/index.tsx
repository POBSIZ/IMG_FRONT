import React, { useEffect, useState, useRef } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

interface CheckAdminPropsType {
  children: React.ReactElement;
}

const CheckAdmin: React.FC<CheckAdminPropsType> = (props) => {
  const authReducer = useSelector((state: RootStateOrAny) => state.authReducer);
  return authReducer?.profile?.role === 'admin' ? props.children : <></>;
};

export default CheckAdmin;
