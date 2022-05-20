import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import BadgeComponent from './badge_component';

export interface BadgePropsType {
  children: string;
  backColor: string;
  textColor?: string;
  radius: string;
  size: string;
}

const Badge: React.FC<BadgePropsType> = (
  props,
  { children, backColor, textColor, radius, size }: BadgePropsType,
) => {
  return (
    <>
      <BadgeComponent {...props} />
    </>
  );
};

export default Badge;
