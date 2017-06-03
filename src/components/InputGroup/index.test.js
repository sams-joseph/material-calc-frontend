import React from 'react';
import ReactDOM from 'react-dom';
import InputGroup from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputGroup />, div);
});
