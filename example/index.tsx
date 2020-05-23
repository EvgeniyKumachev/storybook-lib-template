import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Block } from '../dist';

const App = () => {
  return (
    <div>
      <Block />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
