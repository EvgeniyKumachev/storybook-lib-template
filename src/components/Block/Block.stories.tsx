import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Block, BlockProps } from './index';

export default {
  title: 'Block',
  component: Block,
} as Meta<BlockProps>;

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default: Story<BlockProps> = props => (
  <Block {...props}>Block</Block>
);
