import React, { useState, useCallback } from 'react';
import { Logo } from 'Atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';
import Link from 'next/link';
import { AosWrapper } from 'Hoc';

import StyledSwipeBanner, {
  StyledSlider,
  SlideItem,
} from './swipeBanner_styled';
import { SwipeBannerPropsType } from '.';

const SwipeBannerComponent: React.FC<SwipeBannerPropsType> = (
  props: SwipeBannerPropsType,
) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1800,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <StyledSwipeBanner>
      <StyledSlider {...settings}>
        {[...Array(10)].map((item, i) => (
          <SlideItem key={nanoid()}>
            <AosWrapper animation="fade-left" delay={800}>
              <span>{i}</span>
            </AosWrapper>
          </SlideItem>
        ))}
      </StyledSlider>
    </StyledSwipeBanner>
  );
};

export default SwipeBannerComponent;
