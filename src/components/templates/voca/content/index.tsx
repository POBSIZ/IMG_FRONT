import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { nanoid } from 'nanoid';

import VocaContentComponent from './vocaContent.component';

const VocaContentTemplate: React.FC<any> = (props) => {
  return (
    <>
      <VocaContentComponent {...props} />
    </>
  );
};

export default VocaContentTemplate;
