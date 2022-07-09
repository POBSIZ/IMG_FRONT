import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import { Loader } from 'Bases';

interface LoadWrapperPropsType {
  isLoad: boolean;
  children: React.ReactElement;
}

const LoadWrapper: React.FC<LoadWrapperPropsType> = (props) => {
  return props.isLoad ? props.children : <Loader />;
};

export default LoadWrapper;
