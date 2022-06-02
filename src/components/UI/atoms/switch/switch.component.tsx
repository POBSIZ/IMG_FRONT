import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { SwitchPropsType } from '.';
import StyledSwitch, { SwitchCircle, SwitchValue } from './switch.styled';

const SwitchComponent: React.FC<SwitchPropsType> = (props: SwitchPropsType) => {
  // const switchValue = useRef<HTMLInputElement>();
  // const [switchState, setSwitchState] = useState<boolean>(false);

  const handleSwitch = useCallback(() => {
    // setSwitchState((state) => !state);
    props.handleSwitch((state) => !state);
  }, [props.switchState]);

  return (
    <>
      <StyledSwitch onClick={handleSwitch} state={props.switchState} {...props}>
        <SwitchCircle state={props.switchState} {...props} />
        {/* <SwitchValue
          type="checkbox"
          defaultChecked={switchState && switchValue.current?.checked}
          ref={switchValue}
          hidden
          name={props.name}
        /> */}
      </StyledSwitch>
    </>
  );
};

export default SwitchComponent;
