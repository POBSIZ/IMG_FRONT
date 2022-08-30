import { useMethod } from 'Hooks';
import { Get } from 'Utils';
import React, { useEffect } from 'react';
import HomeComponent from './home.component';

export interface HomeTemplatePropsType {
  imgSrc: string;
  storyList: any;
  noticeList: any;
}

const HomeTemplate: React.FC<HomeTemplatePropsType> = (props) => {
  const method = useMethod();

  return (
    <>
      <HomeComponent {...props} />
    </>
  );
};

export default HomeTemplate;
