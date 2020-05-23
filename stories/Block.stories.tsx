import React from 'react';

import { Block, BlockProps } from '../src/components';

export default {
  title: 'Block',
  component: Block,
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<BlockProps>) => (
  <Block {...props}>Block</Block>
);
