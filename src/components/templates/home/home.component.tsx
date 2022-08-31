import React, { useEffect, useState, useCallback } from 'react';

import { HomeTemplatePropsType } from '.';
import StyledHome from './home.styled';

import { SwipeBanner, TitleBanner } from 'Organisms';
import { Title } from 'Atoms';

const HomeComponent: React.FC<HomeTemplatePropsType> = (
  props: HomeTemplatePropsType,
) => {
  return (
    <StyledHome>
      <Title style={{ display: 'none' }}>이미지 어학원 | 홈</Title>
      <TitleBanner {...props} />
      {/* <SwipeBanner /> */}
    </StyledHome>
  );
};

export default HomeComponent;
