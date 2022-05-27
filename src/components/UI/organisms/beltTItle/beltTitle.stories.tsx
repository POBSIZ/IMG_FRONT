import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import BeltTitleComponent from './beltTitle_component';

export default {
  title: 'Organisms/BeltTitle',
  component: BeltTitleComponent,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Organisms/TitleBanner">
      <BeltTitleComponent />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
