import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledSelectList, { ListItem } from './selectList.styled';

import { SelectListPropsType } from '.';

import { Input } from 'Atoms';

const SelectListComponent: React.FC<SelectListPropsType> = (props) => {
  return (
    <StyledSelectList boxHeight={props.boxHeight}>
      {props.selectList?.map((item, i) => {
        return (
          <ListItem
            key={nanoid()}
            onClick={() => {
              props.handleClick(item.idx, item.title, item.subtitle);
            }}
          >
            <Input type={props.type} id={props.name + i} name={props.name} />
            <label htmlFor={props.name + i}>
              {item.title} <span>/ {item.subtitle}</span>
            </label>
          </ListItem>
        );
      })}
    </StyledSelectList>
  );
};

export default SelectListComponent;
