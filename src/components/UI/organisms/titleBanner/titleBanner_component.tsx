import React, { useState, useCallback } from 'react';
import { Logo } from 'Atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';
import Link from 'next/link';
import StyledTitleBanner from './titleBanner_styled';
import { AosWrapper } from 'Hoc';

import { TitleBannerPropsType } from '.';

const TitleBannerComponent: React.FC<TitleBannerPropsType> = (
  props: TitleBannerPropsType,
) => {
  return (
    <StyledTitleBanner style={{ background: props.imgSrc }}>
      <AosWrapper animation="fade-up" duration={600}>
        <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
      </AosWrapper>
      <AosWrapper animation="fade-up" delay={1000} duration={800}>
        <p>
          REWORK는 편리한 랜딩페이지 제작을 위해 제작된 템플릿 입니다. <br />
          REWORK는 모두에게 열려있는 오픈소스 프로젝트 입니다.
        </p>
      </AosWrapper>
    </StyledTitleBanner>
  );
};

export default TitleBannerComponent;
