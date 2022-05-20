import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { Meta, Story } from '@storybook/react';
import ModalComponent from './modal_component';
import StoriesLayout from 'src/components/stories/storiesLayout';

export default {
  title: 'Atoms/Modal',
  component: ModalComponent,
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Atoms/Modal">
    <div style={{ width: args.width }}>
      <span className="info">Default</span>
      <ModalComponent></ModalComponent>
    </div>
  </StoriesLayout>
);

export const Default = Template.bind({});
Default.args = {};
