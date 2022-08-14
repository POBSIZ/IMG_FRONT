import React, { useEffect, useState, useCallback } from 'react';

import { ProfileTemplatePropsType } from '.';
import StyledProfile, { ProfileInfo, QuizLogItem } from './profile.styled';

import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { nanoid } from 'nanoid';
import Layout from 'Layouts';
import { Button, Input, Move } from 'Atoms';
import Link from 'next/link';
import { CheckRole } from 'Hoc';
import { FormatDate } from 'Utils';

const ProfileComponent: React.FC<ProfileTemplatePropsType> = (props) => {
  return (
    <Layout.Container>
      <StyledProfile>
        <ProfileInfo>
          <h1>{props.profile?.nickname}</h1>
          {/* <p>
            {props.profile.school} | {props.profile.grade}
          </p> */}
          {/* <span>{props.profile.phone}</span> */}
        </ProfileInfo>

        <Move href={`/profile/${props.profile?.user_id}`} backColor="primary">
          내 정보 수정하기
        </Move>

        {/* 학부모 자녀 계정 연결 요청 */}
        <CheckRole role="parents">
          <>
            {props.profile?.chain_id ? (
              <Layout.Content>
                <span>
                  연결된 계정:{' '}
                  <h3 style={{ display: 'inline-block' }}>{props.chainId}</h3>
                </span>
              </Layout.Content>
            ) : (
              <Layout.Content>
                <form
                  style={{ display: 'flex', gap: '10px' }}
                  onSubmit={props.requestChain}
                >
                  <Input
                    placeholder="자녀 아이디"
                    name="chain"
                    type="text"
                    style={{ width: '70%' }}
                  />
                  <Button backColor="primary" style={{ width: '30%' }}>
                    연결하기
                  </Button>
                </form>
              </Layout.Content>
            )}
          </>
        </CheckRole>

        {/* 자녀 계정 연결 승인 */}
        <CheckRole role="student">
          <>
            {props.profile?.chain_id ? (
              <Layout.Content
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexFlow: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span>
                  <h3 style={{ display: 'inline-block' }}>{props.chainId}</h3>{' '}
                  님이 계정 연결 요청을 보냈습니다.
                </span>
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <Button
                    backColor="primary"
                    onClick={() => {
                      props.responseChain(
                        Number(props.profile?.chain_id),
                        true,
                      );
                    }}
                  >
                    승인
                  </Button>
                  <Button
                    backColor="red"
                    onClick={() => {
                      props.responseChain(
                        Number(props.profile?.chain_id),
                        false,
                      );
                    }}
                  >
                    거절
                  </Button>
                </div>
              </Layout.Content>
            ) : null}
          </>
        </CheckRole>

        <Layout.Content>
          <h2>퀴즈 기록</h2>
          <ul
            style={{ height: '50vh', overflow: 'hidden', overflowY: 'scroll' }}
          >
            {props?.quizLog?.map((item) => {
              return (
                <QuizLogItem key={nanoid()}>
                  <section>
                    <span>{FormatDate(item.date, true)}</span>
                    <p>{item.title}</p>
                    <span>
                      {item.score} / {item.probCount}
                    </span>
                  </section>
                  <div>
                    <Link href={`quiz/wrongResult?id=${item.quizLog_id}`}>
                      결과보기
                    </Link>

                    <Link
                      href={`quiz/retry/${item.quiz_id}?title=${item.title}&uqid=${item.userQuiz_id}&qlid=${item.quizLog_id}`}
                    >
                      다시하기
                    </Link>

                    <a
                      href={`${process.env.NEXT_PUBLIC_SERVER}/auth/quiz/wrongList/excel/${item.quizLog_id}`}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                  </div>
                </QuizLogItem>
              );
            })}
          </ul>
        </Layout.Content>
      </StyledProfile>
    </Layout.Container>
  );
};

export default ProfileComponent;
