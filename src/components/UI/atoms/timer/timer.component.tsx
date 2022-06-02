import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { TimerPropsType } from '.';
import StyledTimer from './timer.styled';

const TimerComponent: React.FC<TimerPropsType> = (props: TimerPropsType) => {
  useEffect(() => {
    const timer = setInterval(() => {
      props.handleCount((state) => {
        if (state == 0) {
          clearInterval(timer);
          return 0;
        }
        return --state;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [props.count]);

  return (
    <>
      <StyledTimer>{props.count}</StyledTimer>
    </>
  );
};

export default TimerComponent;
