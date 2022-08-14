import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledAcademyPage, { BoardTabWrapper } from './academyPage.styled';
import Link from 'next/link';
import Layout from 'Layouts';
import { Move, Title } from 'Atoms';
import { BoardTab } from 'Molecules';
import { nanoid } from 'nanoid';

const AcademyPageComponent: React.FC<any> = (props) => {
  // console.log(props.pageInfo?.boards);

  return (
    <Layout.Container>
      <Title style={{ margin: '20px 0' }}>
        {props.pageInfo?.academy_id?.name}
      </Title>
      <StyledAcademyPage>
        <BoardTabWrapper>
          {props.pageInfo?.boards?.map((board, i) => {
            return (
              <Layout.Content key={nanoid()}>
                <BoardTab
                  title={
                    props.pageInfo?.boards?.filter(
                      (brd) =>
                        brd?.board_id?.board_id ===
                        props.pageInfo?.board_contents[i][0]?.board_id
                          ?.board_id,
                    )[0]?.board_id?.title
                  }
                  list={props.pageInfo?.board_contents[i]}
                />
              </Layout.Content>
            );
          })}
        </BoardTabWrapper>
      </StyledAcademyPage>
    </Layout.Container>
  );
};

export default AcademyPageComponent;
