import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  FormEvent,
} from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledUser from './userInfo.styled';
import { UserInfoPropsType } from './userInfo.types';
import Link from 'next/link';

import Layout from 'Layouts';
import { Title, Input, Button, Badge } from 'Atoms';

const UserInfoComponent: React.FC<UserInfoPropsType> = (props) => {
  return (
    <Layout.Container>
      <Title>{props.profile.name}</Title>
    </Layout.Container>
  );
};

export default UserInfoComponent;
