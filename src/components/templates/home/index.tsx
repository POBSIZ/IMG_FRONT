import React from 'react';
import HomeComponent from './home.component';

export interface HomeTemplatePropsType {
  titleBannerImgSrc: string;
}

const HomeTemplate: React.FC<HomeTemplatePropsType> = (props) => {
  return (
    <>
      <HomeComponent {...props} />
    </>
  );
};

export default HomeTemplate;
