import React, { useEffect, useState, useRef } from 'react';

import SwipeBannerComponent from './swipeBanner_component';

export interface ImgSrcType {
  src: string;
  title: string;
  phrases: string;
}

export interface SwipeBannerPropsType {
  // imgSrc: ImgSrcType[];
}

const SwipeBanner: React.FC<SwipeBannerPropsType> = (
  props: SwipeBannerPropsType,
) => {
  return (
    <>
      <SwipeBannerComponent {...props} />
    </>
  );
};

export default SwipeBanner;
