import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ListTabComponent from './listTab_component';

export interface ListTabPropsType {
  maxNum: number;
  currNum: number;
}

const ListTab: React.FC<ListTabPropsType> = (props: ListTabPropsType) => {
  return (
    <>
      <ListTabComponent {...props} />
    </>
  );
};

export default ListTab;
