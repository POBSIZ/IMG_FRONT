import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { nanoid } from 'nanoid';

import VocaMergeComponent from './vocaMerge.component';

const VocaMergeTemplate: React.FC<any> = (props) => {
  return (
    <>
      <VocaMergeComponent {...props} />
    </>
  );
};

export default VocaMergeTemplate;
