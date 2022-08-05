import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AdminBoardCreatePropsType } from '.';
import StyledAdminBoardCreate from './adminBoardCreate.styled';

import Layout from 'Layouts';
import { Title, Input, Button, Back } from 'Atoms';
import { TextInput } from 'Molecules';

const AdminBoardCreateComponent: React.FC<AdminBoardCreatePropsType> = (
  props,
) => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  return (
    <Layout.Container>
      <Back style={{ margin: '20px 0', alignSelf: 'flex-start' }} />
      <Title style={{ margin: '20px 0' }}>📫 게시판 생성</Title>

      <StyledAdminBoardCreate
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit(title, desc);
          setTitle('');
          setDesc('');
        }}
      >
        <Input
          placeholder="게시판 명"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Input
          placeholder="게시판 소개"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <Button backColor="primary">생성</Button>
      </StyledAdminBoardCreate>
    </Layout.Container>
  );
};

export default AdminBoardCreateComponent;
