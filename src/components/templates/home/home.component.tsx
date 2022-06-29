import React, { useEffect, useState, useCallback } from 'react';

import { HomeTemplatePropsType } from '.';
import StyledHome from './home.styled';

import { SwipeBanner, TitleBanner } from 'Organisms';

const HomeComponent: React.FC<HomeTemplatePropsType> = (
  props: HomeTemplatePropsType,
) => {
  return (
    <StyledHome>
      <TitleBanner imgSrc={props.titleBannerImgSrc} />
      {/* <SwipeBanner /> */}
    </StyledHome>
  );
};

export default HomeComponent;
