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

import StyledUserTable, {
  StyledDateField,
  TableWrapper,
} from './userTable.styled';
import Layout from 'Layouts';
import { nanoid } from 'nanoid';

const UserTableComponent: React.FC<any> = (props) => {
  // console.log(props.dateUserList);
  return (
    <Layout.Content
      style={{
        width: '100%',
        overflow: 'scroll',
        background: '#fff',
        paddingLeft: '0',
        paddingRight: '0',
      }}
    >
      <>
        {props.dateUserList?.map((_date) => {
          const listMap = _date.list
            ?.map((_igf) => {
              return _igf.list.length;
            })
            .sort((a, b) => b - a);

          const _Arr = [...new Array(listMap[0])].map((_, i) => i);

          return (
            <TableWrapper key={nanoid()}>
              <StyledDateField>{_date.title}</StyledDateField>
              <StyledUserTable>
                <div className="names">
                  {_date.list?.map((usr) => (
                    <div key={nanoid()}>
                      <p>{usr.data.class_name}</p>
                      <p>{usr.title}</p>
                    </div>
                  ))}
                </div>

                <>
                  {_Arr.map((_, i) => {
                    return (
                      <div className="test" key={nanoid()}>
                        <p>{i + 1}</p>
                        <ul>
                          <li>
                            <span>시험명</span>
                            <span>점수</span>
                          </li>

                          {_date?.list?.map((_inusr) => {
                            return (
                              <li key={nanoid()}>
                                <span>{_inusr?.list[i]?.title}</span>
                                <span>
                                  {_inusr?.list[i]?.data.score} /{' '}
                                  {_inusr?.list[i]?.data.probCount}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </>
              </StyledUserTable>
            </TableWrapper>
          );
        })}
      </>
    </Layout.Content>
  );
};

export default UserTableComponent;
