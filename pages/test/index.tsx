import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled, { css } from 'styled-components';

import Layout from 'Layouts';

import { Address, Search } from 'Molecules';

const Circle = styled.div.attrs((props) => {})<{ isOpen: boolean }>`
  ${(props) => {
    return css`
      z-index: 0;

      position: absolute;
      border-radius: 100%;

      width: 80px;
      height: 80px;

      transform: translate(10px, 10px);

      ${props.isOpen
        ? css`
            &:nth-child(2) {
              background-color: rgb(10, 10, 200);
              transform: translate(10px, -100px);
              transition: all 0.2s;
            }

            &:nth-child(3) {
              background-color: rgb(10, 200, 200);
              transform: translate(100px, -80px);
              transition: all 0.3s;
            }

            &:nth-child(4) {
              background-color: rgb(200, 10, 200);
              transform: translate(120px, 10px);
              transition: all 0.4s;
            }

            &:nth-child(5) {
              background-color: rgb(200, 200, 10);
              transform: translate(100px, 100px);
              transition: all 0.5s;
            }

            &:nth-child(6) {
              background-color: rgb(200, 10, 10);
              transform: translate(10px, 120px);
              transition: all 0.6s;
            }
          `
        : null}

      transition: all 0.3s;
    `;
  }}
`;

const StyledTest = styled.div`
  .center {
    cursor: pointer;

    z-index: 10;
    position: absolute;
    background-color: #000;
    border-radius: 100%;

    width: 100px;
    height: 100px;
  }
`;

const KakaoPage: NextPage<any> = (props, {}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Layout.Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <StyledTest>
        <div
          className="center"
          onClick={() => {
            setIsOpen((state) => !state);
          }}
        ></div>
        <Circle isOpen={isOpen} />
        <Circle isOpen={isOpen} />
        <Circle isOpen={isOpen} />
        <Circle isOpen={isOpen} />
        <Circle isOpen={isOpen} />
      </StyledTest>
    </Layout.Container>
  );
};
export default KakaoPage;
