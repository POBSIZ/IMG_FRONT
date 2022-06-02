import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import TimerComponent from './timer.component';

export default {
  title: 'Atoms/Timer',
  component: TimerComponent,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => {
  const [state, setState] = useState<number>(10);
  return (
    <>
      <StoriesLayout title="Atoms/Timer">
        <span className="info">Default</span>
        <TimerComponent count={state} handleCount={setState} />
      </StoriesLayout>
    </>
  );
};

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
