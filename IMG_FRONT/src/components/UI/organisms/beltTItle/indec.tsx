import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import BeltTitleComponent from './beltTitle_component';

export interface BeltTitlePropsType {}

const BeltTitle: React.FC<BeltTitlePropsType> = (props: BeltTitlePropsType) => {
  return (
    <>
      <BeltTitleComponent {...props} />
    </>
  );
};

export default BeltTitle;
