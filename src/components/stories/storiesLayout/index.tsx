import React, {
  useEffect,
  useState,
  useRef,
  CSSProperties,
  ReactNode,
} from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import StoiesLayoutComponent from './layout.component';

export interface StoriesLayoutPropsType {
  title: string;
  style?: CSSProperties;
  children: ReactNode;
}

const StoriesLayout: React.FC<StoriesLayoutPropsType> = (
  props,
  { title, style, children }: StoriesLayoutPropsType,
) => {
  return (
    <>
      <StoiesLayoutComponent {...props} />
    </>
  );
};

export default StoriesLayout;
