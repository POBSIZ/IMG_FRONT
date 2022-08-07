import React, { useState, useCallback, useEffect } from 'react';
import { Logo } from 'Atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';
import Link from 'next/link';

import StyledTitleBanner, {
  PortalRing,
  BoardTabWrapper,
} from './titleBanner.styled';
import { AosWrapper } from 'Hoc';

import { TitleBannerPropsType } from '.';

import Layout from 'Layouts';
import { BoardTab, SmallGallery } from 'Molecules';
import { Move } from 'Atoms';
import { useMethod } from 'Hooks';

const TitleBannerComponent: React.FC<TitleBannerPropsType> = (
  props: TitleBannerPropsType,
) => {
  const method = useMethod();

  const [noticeList, setNoticeList] = useState<any[]>([]);
  const [storyList, setStoryList] = useState<any[]>([]);

  const getLists = async () => {
    const nl: any = await method.GET(`/board/list/${4}`);
    const sl: any = await method.GET(`/board/list/${3}`);
    setNoticeList(
      nl.data.sort((a, b) => {
        return Number(new Date(b.created_at)) - Number(new Date(a.created_at));
      }),
    );
    setStoryList(
      sl.data.sort((a, b) => {
        return Number(new Date(b.created_at)) - Number(new Date(a.created_at));
      }),
    );
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      <StyledTitleBanner style={{ background: props.imgSrc }}>
        {/* <Layout.Container>
          <AosWrapper animation="fade-up" duration={500}>
            <section>
              <PortalRing>
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <AosWrapper animation="fade-up" duration={600}>
                  <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
                </AosWrapper>
                <AosWrapper animation="fade-up" delay={1000} duration={800}>
                  <p>안녕하세요 이미지 어학원입니다.</p>
                </AosWrapper>
              </PortalRing>
            </section>
          </AosWrapper>
        </Layout.Container> */}

        {/* <Move href="/quiz" backColor="primary">
          퀴즈풀러가기
        </Move> */}

        <Layout.Container
          style={{
            display: 'flex',
            flexFlow: 'column',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          <Layout.Content
            style={{
              display: 'flex',
              flexFlow: 'row',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <div className="gal">
              <SmallGallery title="공지" list={noticeList} limit={4} />
            </div>
            <div className="gal">
              <SmallGallery title="소식" list={storyList} limit={4} />
            </div>
          </Layout.Content>
          <BoardTabWrapper>
            <Layout.Content>
              <BoardTab title="공지" list={noticeList} />
            </Layout.Content>
            <Layout.Content>
              <BoardTab title="소식" list={storyList} />
            </Layout.Content>
          </BoardTabWrapper>
        </Layout.Container>
      </StyledTitleBanner>
    </>
  );
};

export default TitleBannerComponent;
