import React, { useState, useCallback, useEffect } from 'react';
import { Logo } from 'Atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';
import Link from 'next/link';

import StyledTitleBanner, { PortalRing } from './titleBanner.styled';
import { AosWrapper } from 'Hoc';

import { TitleBannerPropsType } from '.';

const TitleBannerComponent: React.FC<TitleBannerPropsType> = (
  props: TitleBannerPropsType,
) => {
  return (
    <>
      <StyledTitleBanner style={{ background: props.imgSrc }}>
        <AosWrapper animation="fade-up" duration={500}>
          <section>
            <PortalRing>
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <AosWrapper animation="fade-up" duration={600}>
                <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
              </AosWrapper>
              <AosWrapper animation="fade-up" delay={1000} duration={800}>
                <p>안녕하세요 이미지 어학원입니다.</p>
              </AosWrapper>
            </PortalRing>
          </section>
        </AosWrapper>
      </StyledTitleBanner>
    </>
  );
};

export default TitleBannerComponent;
