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

import { BoardContentPropsType } from '.';
import StyledBoardContent, {
  PostContent,
  EditDiv,
} from './boardContent.styled';

import Layout from 'Layouts';
import { Title, Move, Button } from 'Atoms';
import { FormatDate } from 'Utils';

const BoardContentComponent: React.FC<BoardContentPropsType> = (props) => {
  return (
    <Layout.Container>
      <StyledBoardContent>
        <Title>
          {props.content.title}
          <span> / {props.content.user_id.nickname}</span>
        </Title>
        <EditDiv>
          <span>{FormatDate(props.content.created_at)}</span>
          {props.isEditable ? (
            <div>
              <Move
                href={`/board/edit/${props.content.post_id}`}
                backColor="primary"
              >
                수정
              </Move>
              <Button
                backColor="red"
                onClick={() => {
                  props.deletePost(props.content.post_id);
                }}
              >
                삭제
              </Button>
            </div>
          ) : null}
        </EditDiv>
      </StyledBoardContent>
      <PostContent
        dangerouslySetInnerHTML={{
          __html: props.content.content,
        }}
      />
    </Layout.Container>
  );
};

export default BoardContentComponent;
