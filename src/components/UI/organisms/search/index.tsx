import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { TextInput, SelectList } from 'Molecules';
import { Input } from 'Atoms';
import Layout from 'Layouts';
import { SetStateType } from 'Types';
import { useDebounce, useMethod } from 'Hooks';

import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';
import StyledSelectList from 'Molecules/selectList/selectList.styled';

export const StyledSearch = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $mobile_max_width = Theme.media.$mobile_max_width;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;
    const $font_title_big = Theme.font.$font_title_big;
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      gap: 4px;

      ${StyledSelectList} {
        width: 100%;
      }
      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

export interface SearchPropsType {
  getBaseUrl: string;
  setSearchResult: SetStateType;
}

const Search: React.FC<SearchPropsType> = (props) => {
  const debounce = useDebounce();
  const method = useMethod();
  const [textVal, setTextVal] = useState('');
  const [resList, setResList] = useState([]);

  const getResult = async (e) => {
    e.target.value === '' ? setResList([]) : null;
    debounce(async () => {
      try {
        const res = await method.GET(`${props.getBaseUrl}/${e.target.value}`);
        setResList(res.data);
      } catch (error) {
        setResList([]);
      }
    }, 200);
  };

  return (
    <StyledSearch>
      <TextInput type="text" placeholder="검색" text="" onChange={getResult} />
      {resList.length < 1 ? null : (
        <SelectList
          name="result"
          type="radio"
          boxHeight={'auto'}
          selectList={resList}
          handleClick={(_idx, _title, _subtitle) => {
            props.setSearchResult((state) => ({
              _idx,
              _title,
              _subtitle,
            }));
          }}
        />
      )}
    </StyledSearch>
  );
};

export default Search;
