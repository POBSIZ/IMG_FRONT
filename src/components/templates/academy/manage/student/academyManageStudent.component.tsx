import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledAcademyManageStudent from './academyManageStudent.styled';

import Layout from 'Layouts';
import { Button, Title, Back, Move, Select } from 'Atoms';
import { Directory } from 'Molecules';
import { AcademyManageClassTemplate, UserTemplate } from 'Templates';

import { UserTable } from 'Organisms';

const AcademyManageStudentComponent: React.FC<any> = (props) => {
  const [viewType, setViewType] = useState<'dir' | 'table' | 'list'>('table');

  const ViewMap = {
    dir: (
      <Layout.Content className="inner">
        <form onSubmit={() => {}}>
          <Directory
            name="dir"
            title="전체"
            list={props.userList}
            data={'all'}
            handleClick={(e, data) => {}}
          />
        </form>
      </Layout.Content>
    ),
    table: (
      <Layout.Content
        style={{
          height: '80vh',
          backgroundColor: '#fff',
        }}
      >
        <UserTable dateUserList={props.userListTable} />
      </Layout.Content>
    ),
    list: (
      <section
        style={{
          maxHeight: '80vh',
          overflow: 'scroll',
        }}
      >
        <UserTemplate userList={props.users} hasRole={true} />
      </section>
    ),
  };

  return (
    <Layout.Container>
      <Back style={{ margin: '20px 0', alignSelf: 'flex-start' }} />
      <Title style={{ margin: '20px 0' }}>🙋‍♀️ 학생 관리</Title>
      <StyledAcademyManageStudent>
        <Layout.Content className="students">
          <h2>학생 목록</h2>
          <Select
            style={{ marginBottom: '20px' }}
            onChange={(e: any) => {
              setViewType(e.target.value);
            }}
          >
            <option value="table">테이블 뷰</option>
            <option value="dir">디렉토리 뷰</option>
            <option value="list">리스트 뷰</option>
          </Select>
          {ViewMap[viewType]}
        </Layout.Content>
      </StyledAcademyManageStudent>
    </Layout.Container>
  );
};

export default AcademyManageStudentComponent;
