import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Block } from '../stories/Block.stories';

describe('Block', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Block />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
