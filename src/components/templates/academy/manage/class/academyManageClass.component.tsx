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

import StyledAcademyManageClass from './academyManageClass.styled';

import Layout from 'Layouts';
import { Input, Button, Title, Back } from 'Atoms';
import { SelectList, UserList, Directory } from 'Molecules';
import { FilterBox } from 'Organisms';

const AcademyManageClassComponent: React.FC<any> = (props) => {
  const [classN, setClassN] = useState<string>('');
  const [selClass, setSelClass] = useState<any[]>([]);
  const [selUser, setSelUser] = useState<any>({});

  return (
    <Layout.Container>
      <Back style={{ margin: '20px 0', alignSelf: 'flex-start' }} />
      <Title style={{ margin: '20px 0' }}>📦 반 관리</Title>
      <Layout.Content>
        <StyledAcademyManageClass
          onSubmit={(e: any) => {
            e.preventDefault();
            // props.handleSetClass(selClass, e.target.user);
          }}
        >
          <div className="classForm">
            <h2>반 생성</h2>

            <Input
              placeholder="반 이름"
              value={classN}
              onChange={(e) => {
                setClassN(e.target.value);
              }}
            />
            <Button
              type="button"
              backColor="primary"
              onClick={() => {
                setClassN('');
                props.handleCreateClass(classN);
              }}
            >
              반 생성
            </Button>
          </div>

          <h2>학생 목록</h2>
          <FilterBox list={props.userInfoList} getList={setSelUser} depth={2} />

          <h2>반 목록</h2>
          <SelectList
            name="class"
            type="radio"
            boxHeight="20vh"
            selectList={props.classList}
            handleClick={(_idx, _title, _subtitle, _dataObj) => {
              // console.log(_idx, _title, _subtitle, _dataObj);
              setSelClass(_dataObj.class_id);
            }}
          />
          <div className="btns">
            <Button
              type="button"
              backColor="red"
              onClick={() => {
                props.handleRemoveClass(selClass);
              }}
            >
              반 삭제
            </Button>
            <Button
              type="button"
              backColor="primary"
              onClick={() => {
                props.handleSetClass(selClass, selUser);
              }}
            >
              반 배정
            </Button>
          </div>
        </StyledAcademyManageClass>
      </Layout.Content>
    </Layout.Container>
  );
};

export default AcademyManageClassComponent;
