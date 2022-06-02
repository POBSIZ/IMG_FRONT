import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import LoginComponent from './login.component';

export default {
  title: 'Template/Login',
  component: LoginComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Template/Login">
    <LoginComponent {...args} />
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
