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
import { FormatDate } from 'Utils';

const UserTableComponent: React.FC<any> = (props) => {
  // console.log(props.dateUserList);
  return (
    <Layout.Content
      style={{
        width: '100%',
        height: '100%',
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
                        <p>{i + 1} 회</p>
                        <ul>
                          <li>
                            <span>
                              시험명
                              <br />
                              점수 / 시간
                            </span>
                            {/* <span>점수</span> */}
                          </li>

                          {_date?.list?.map((_inusr) => {
                            return (
                              <li key={nanoid()}>
                                <span>
                                  {_inusr?.list[i]?.title}
                                  <br />
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

        <div
          style={{
            height: '100vh',
          }}
        ></div>
      </>
    </Layout.Content>
  );
};

export default UserTableComponent;
