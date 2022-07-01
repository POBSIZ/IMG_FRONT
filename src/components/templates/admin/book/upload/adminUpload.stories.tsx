import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import AdminUploadComponent from './adminUpload.component';

export default {
  title: 'Template/AdminUpload',
  component: AdminUploadComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Template/AdminUpload">
    <AdminUploadComponent {...args} />
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
