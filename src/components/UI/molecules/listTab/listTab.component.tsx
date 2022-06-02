import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { ListTabPropsType } from '.';
import StyledListTab from './listTab.styled';

const ListTabComponent: React.FC<ListTabPropsType> = (
  props: ListTabPropsType,
) => {
  return (
    <>
      <StyledListTab {...props}>
        {props.currNum} / {props.maxNum}
      </StyledListTab>
    </>
  );
};

export default ListTabComponent;
