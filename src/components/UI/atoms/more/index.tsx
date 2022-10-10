import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'Atoms/button';

const More: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <>
      <Button
        backColor="black"
        onClick={props.onClick}
        style={{
          width: '100%',
          margin: '20px 0',
          backgroundColor: 'none',
          background: 'none',
          color: 'rgb(30,30,30,100%)',
        }}
      >
        더보기
      </Button>
    </>
  );
};

export default More;
