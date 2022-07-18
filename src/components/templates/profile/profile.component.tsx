import React, { useEffect, useState, useCallback } from 'react';

import { ProfileTemplatePropsType } from '.';
import StyledProfile, { ProfileInfo, QuizLogItem } from './profile.styled';

import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { nanoid } from 'nanoid';
import Layout from 'Layouts';
import { Button, Input } from 'Atoms';
import Link from 'next/link';
import { CheckRole } from 'Hoc';

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
                    style={{ width: '80%' }}
                  />
                  <Button backColor="primary" style={{ width: '20%' }}>
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
              const _dateObj = new Date(item.date).toISOString();
              const dateObj = new Date(_dateObj);
              const date = `${dateObj.getFullYear()}/${dateObj.getMonth()}/${dateObj.getDay()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

              return (
                <QuizLogItem key={nanoid()}>
                  <section>
                    <p>{date}</p>
                    <p>
                      {item.title} 점수 {item.score} / {item.probCount}
                    </p>
                  </section>
                  <div>
                    <Link href={`quiz/wrongResult?id=${item.quizLog_id}`}>
                      결과보기
                    </Link>
                    <Link
                      href={`quiz/play/${item.quiz_id}?title=${item.title}&uqid=${item.userQuiz_id}`}
                    >
                      재시험
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
