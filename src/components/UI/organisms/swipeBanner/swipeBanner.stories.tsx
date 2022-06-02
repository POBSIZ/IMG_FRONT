import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import SwipeBannerComponent from './swipeBanner.component';

export default {
  title: 'Organisms/SwipeBanner',
  component: SwipeBannerComponent,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Organisms/SwipeBanner">
      <SwipeBannerComponent />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
