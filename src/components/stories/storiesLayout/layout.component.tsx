import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledStoriesLayout from './layout.styled';
import { StoriesLayoutPropsType } from 'src/components/stories/storiesLayout';

const StoiesLayoutComponent: React.FC<StoriesLayoutPropsType> = (
  props: StoriesLayoutPropsType,
) => {
  return (
    <>
      <StyledStoriesLayout>
        <h1>{props.title}</h1>
        <hr />
        <div className="component" style={props.style}> 
          {props.children}
        </div>
      </StyledStoriesLayout>
    </>
  );
};

export default StoiesLayoutComponent;
