import React, { useEffect, useState, useCallback } from 'react';

import StyledHome from './home_styled';
import { AosWrapper } from 'Hoc';
import Image from 'next/image';
import Layout from 'Layouts';

import { Input } from 'Atoms';
import { useDebounce, useThrottle } from 'Hooks';

const HomeComponent: React.FC = () => {
  const [test, setTest] = useState('');
  const [testNum, setTestNum] = useState(0);
  const debounce = useDebounce();
  const throttle = useThrottle();

  const handleInput = (e) => {
    setTest(e.target.value);
    debounce(() => {
      setTestNum((num) => num + 1);
      console.log(testNum);
    }, 200);
  };

  return (
    <StyledHome className="home_about">
      <Layout.Container>
        {[...Array(1)].map((item, id) => (
          <AosWrapper animation="fade-up" delay={100} key={id}>
            <div style={{ width: '40%', paddingBottom: '25%', margin: 'auto' }}>
              <Image src="/AdventurTime.jpg" layout="fill" objectFit="cover" />
            </div>
          </AosWrapper>
        ))}
        <Input
          value={test}
          onChange={handleInput}
          placeholder="test"
          type="text"
        />
      </Layout.Container>
    </StyledHome>
  );
};

export default HomeComponent;
