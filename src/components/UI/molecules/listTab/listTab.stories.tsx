import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import ListTab from '.';

export default {
  title: 'Molecules/ListTab',
  component: ListTab,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Molecules/ListTab">
      <div
        style={{
          width: args.width,
        }}
      >
        <span className="info">Default</span>
        <ListTab {...args} />
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '200px',
  maxNum: 200,
  currNum: 1,
};
