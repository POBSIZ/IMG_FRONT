import React, { useEffect, useState, useCallback } from 'react';

import StyledHome from './home_styled';

import { TitleBanner } from 'Templates';
import { SwipeBanner } from 'Organisms';

const HomeComponent: React.FC = () => {
  return (
    <StyledHome>
      <TitleBanner imgSrc="/img/main_bg.webp" />
      <SwipeBanner />
    </StyledHome>
  );
};

export default HomeComponent;
