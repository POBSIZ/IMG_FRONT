import React from 'react';
import TimerComponent from './timer.component';
import { SetStateType } from 'Types';

export interface TimerPropsType {
  count: number;
  handleCount: SetStateType;
}

const Timer: React.FC<TimerPropsType> = (props: TimerPropsType) => {
  return (
    <>
      <TimerComponent {...props} />
    </>
  );
};

export default Timer;
