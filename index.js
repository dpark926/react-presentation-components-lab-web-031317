import React from 'react';
import ReactDOM from 'react-dom';

import DumbComponent from './components/DumbComponent';
import DumberComponent from './components/DumberComponent';

ReactDOM.render(
  <div>
    <DumbComponent />
    <DumberComponent handleClick={false} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // leave this in!
