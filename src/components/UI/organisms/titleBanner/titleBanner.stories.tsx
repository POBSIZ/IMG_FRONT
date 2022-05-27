import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import TitleBannerComponent from './titleBanner_component';

export default {
  title: 'Templates/TitleBanner',
  component: TitleBannerComponent,
  parameters: {},
  argTypes: {},
} as Meta;

const color = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'disabled',
];
const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Templates/TitleBanner">
      <TitleBannerComponent imgSrc="/img/main_bg.webp" />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
