import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import TitleBannerComponent from './titleBanner_component';

export interface TitleBannerPropsType {
  imgSrc: string;
}

const TitleBanner: React.FC<TitleBannerPropsType> = (
  props: TitleBannerPropsType,
) => {
  return (
    <>
      <TitleBannerComponent {...props} />
    </>
  );
};

export default TitleBanner;
