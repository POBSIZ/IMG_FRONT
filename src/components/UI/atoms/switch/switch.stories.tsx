import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import SwitchComponent from './switch.component';

export default {
  title: 'Atoms/Switch',
  component: SwitchComponent,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = (args) => {
  const [state, setState] = useState<boolean>(true);
  return (
    <>
      <StoriesLayout title="Atoms/Switch">
        <span className="info">S</span>
        <SwitchComponent
          size="S"
          switchState={state}
          handleSwitch={setState}
          {...args}
        />

        <span className="info">M</span>
        <SwitchComponent
          size="M"
          switchState={state}
          handleSwitch={setState}
          {...args}
        />

        <span className="info">L</span>
        <SwitchComponent
          size="L"
          switchState={state}
          handleSwitch={setState}
          {...args}
        />
      </StoriesLayout>
    </>
  );
};

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
