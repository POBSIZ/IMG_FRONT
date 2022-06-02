import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';
import HomeComponent from './home.component';

export default {
  title: 'Templates/Home',
  component: HomeComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Templates/Home">
    <HomeComponent {...args} />
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
