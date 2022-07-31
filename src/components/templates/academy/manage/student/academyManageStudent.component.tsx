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
import { Button, Title } from 'Atoms';
import { Directory } from 'Molecules';
import { AcademyManageClassTemplate } from 'Templates';

const AcademyManageStudentComponent: React.FC<any> = (props) => {
  const sortData = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>🙋‍♀️ 학생 관리</Title>
      <StyledAcademyManageStudent>
        <Layout.Content className="students">
          <h2>학생 목록</h2>
          <Layout.Content className="inner">
            <form onSubmit={sortData}>
              <Directory
                name="dir"
                title="전체"
                list={props.userList}
                data={'all'}
                handleClick={(e, data) => {}}
              />
            </form>
          </Layout.Content>
        </Layout.Content>
      </StyledAcademyManageStudent>
    </Layout.Container>
  );
};

export default AcademyManageStudentComponent;
