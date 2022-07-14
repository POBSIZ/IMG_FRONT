import React, { useEffect, useState, useCallback } from 'react';

import { ProfileTemplatePropsType } from '.';
import StyledProfile, { ProfileInfo, QuizLogItem } from './profile.styled';

import { } from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { } from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { nanoid } from 'nanoid';
import Layout from 'Layouts';
import { Button } from 'Atoms';
import Link from 'next/link';

const ProfileComponent: React.FC<ProfileTemplatePropsType> = (props) => {
  return (
    <Layout.Container>
      <StyledProfile>
        <ProfileInfo>
          <h1>{props.profile.nickname}</h1>
          <p>
            {props.profile.school} | {props.profile.grade}
          </p>
          {/* <span>{props.profile.phone}</span> */}
        </ProfileInfo>

        <Layout.Content>
          <h2>퀴즈 기록</h2>
          <ul
            style={{ height: '50vh', overflow: 'hidden', overflowY: 'scroll' }}
          >
            {props.quizLog.map((item) => {
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
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
