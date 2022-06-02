import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import QuizComponent from './quiz.component';

export default {
  title: 'Templates/Quiz',
  component: QuizComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Templates/Quiz">
    <QuizComponent {...args} />
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
