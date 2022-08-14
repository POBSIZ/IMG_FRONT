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
import { SelectListType } from 'Molecules/selectList';

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

      * {
        margin: 0 !important;
      }

      span {
        margin-bottom: 6px !important;
      }

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
  setSearchResult: Function;
  placeholder: string;
  text: string;
  init?: string;
}

const Search: React.FC<SearchPropsType> = (props) => {
  const debounce = useDebounce();
  const method = useMethod();
  const [resList, setResList] = useState<SelectListType[]>([]);
  const [dataObj, setDataObj] = useState<any>({});

  const getResult = async (e) => {
    debounce(async () => {
      try {
        e.target.value === '' ? setResList([]) : null;
        const res = await method.POST(`${props.getBaseUrl}`, {
          str: e.target.value,
        });
        setResList(
          res.data.map((item) => ({
            idx: item.academy_id,
            title: item.name,
            subtitle: item.zip,
            ...item,
          })),
        );
      } catch (error) {
        setResList([]);
      }
    }, 200);
  };

  useEffect(() => {
    const getInfo = async () => {
      const res = await method.POST(`${props.getBaseUrl}`, {
        str: props.init,
      });

      props.setSearchResult(
        res.data[0].academy_id,
        res.data[0].name,
        res.data[0].zip,
        res.data[0],
      );
    };

    if (props.init) {
      try {
        getInfo();
      } catch (error) {}
    }
  }, []);

  return (
    <StyledSearch>
      <TextInput
        type="text"
        placeholder={props.placeholder}
        text={props.text}
        onChange={getResult}
      />
      {resList.length < 1 ? null : (
        <SelectList
          name="result"
          type="radio"
          boxHeight={'auto'}
          selectList={resList}
          handleClick={(_idx, _title, _subtitle, _dataObj) => {
            props.setSearchResult(_idx, _title, _subtitle, _dataObj);
          }}
        />
      )}
    </StyledSearch>
  );
};

export default Search;
