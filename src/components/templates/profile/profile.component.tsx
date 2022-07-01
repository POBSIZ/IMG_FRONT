import React, { useEffect, useState, useCallback } from 'react';

import { ProfileTemplatePropsType } from '.';
import StyledProfile, { ProfileInfo, QuizLogItem } from './profile.styled';

import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
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
          <h1>{props.profile.name}</h1>
          <p>
            {props.profile.school} | {props.profile.grade}
          </p>
          <span>{props.profile.phone}</span>
        </ProfileInfo>

        <Layout.Content>
          <ul>
            {/* <QuizLogItem>
              <span>날짜</span>
              <span>퀴즈명</span>
              <span>점수</span>
              <span>시험결과</span>
              <span>재시험</span>
              <span>오답 엑셀</span>
            </QuizLogItem> */}
            {props.quizLog.map((item) => {
              return item.map((_item) => {
                const dateObj = new Date(_item.date).toDateString();
                // console.log(dateObj);
                // const date = `${dateObj.getFullYear()}.${dateObj.getMonth()}.${dateObj.getDay()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

                return (
                  <QuizLogItem key={nanoid()}>
                    <section>
                      <p>{dateObj}</p>
                      <p>{_item.title}</p>
                      <p>
                        {_item.score} / {_item.probCount}
                      </p>
                    </section>
                    <div>
                      <Link href="/">결과보기</Link>
                      <Link href="/">재시험</Link>
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
              });
            })}
          </ul>
        </Layout.Content>
      </StyledProfile>
    </Layout.Container>
  );
};

export default ProfileComponent;
