import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import QuizPlayComponent from './quizPlay.component';

export default {
  title: 'Templates/QuizPlay',
  component: QuizPlayComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Templates/QuizPlay">
    <QuizPlayComponent {...args} />
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
