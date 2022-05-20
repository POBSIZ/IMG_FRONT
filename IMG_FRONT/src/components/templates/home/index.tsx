import React from 'react';
import HomeComponent from './home_component';

const HomeTemplate: React.FC<any> = (props) => {
  return (
    <>
      <HomeComponent {...props} />
    </>
  );
};

export default HomeTemplate;
