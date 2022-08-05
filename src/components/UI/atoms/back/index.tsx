import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  CSSProperties,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

export interface BackPropsType {
  style?: CSSProperties;
}

const Back: React.FC<BackPropsType> = (props) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.back();
  }, []);

  return (
    <div
      onClick={handleClick}
      style={{
        fontSize: '1.4rem',
        cursor: 'pointer',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        ...props.style,
      }}
    >
      <FontAwesomeIcon style={{ fontSize: '2rem' }} icon={faAngleLeft} />
      뒤로가기
    </div>
  );
};

export default Back;
