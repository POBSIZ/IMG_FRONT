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
      <SwipeBanner />

      <div className="wrap">
        <div className="box">
          <div className="inner"></div>
        </div>
      </div>
    </StyledHome>
  );
};

export default HomeComponent;
