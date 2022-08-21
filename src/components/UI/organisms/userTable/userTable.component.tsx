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
  TableWrapper,
  StyledNumField,
} from './userTable.styled';
import Layout from 'Layouts';
import { nanoid } from 'nanoid';
import { FormatDate } from 'Utils';

const UserTableComponent: React.FC<any> = (props) => {
  // console.log(props);
  return (
    <Layout.Content
      style={{
        width: '100%',
        height: '100%',
        overflow: 'scroll',
        background: '#fff',
        padding: '0',
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
              <StyledNumField>
                <p>{_date.title}</p>
                {_Arr.map((_, i) => (
                  <p key={nanoid()}>{i + 1} 회</p>
                ))}
              </StyledNumField>
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
                        <ul>
                          <li>
                            <span>
                              <span>시험명</span>
                              <span>점수 / 시간</span>
                            </span>
                          </li>

                          {_date?.list?.map((_inusr) => {
                            return (
                              <li key={nanoid()}>
                                <span>
                                  <span>{_inusr?.list[i]?.title}</span>
                                  <span
                                    style={{
                                      color:
                                        _inusr?.list[i]?.data.score ===
                                        _inusr?.list[i]?.data.probCount
                                          ? 'rgb(46, 204, 113, 100%)'
                                          : 'rgb(231, 76, 60, 100%)',
                                    }}
                                  >
                                    {_inusr?.list[i]?.data.probCount ? (
                                      <>
                                        {_inusr?.list[i]?.data.score} /{' '}
                                        {_inusr?.list[i]?.data.probCount}
                                        {' - '}
                                        {FormatDate(
                                          _inusr?.list[i]?.data.date,
                                          false,
                                          true,
                                        )}
                                      </>
                                    ) : null}
                                  </span>
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
