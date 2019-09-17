import React from 'react';
import { shallow } from 'enzyme';
import NewGame from './NewGame';

it('Testing is working', () => {
  expect(2 + 2).toBe(4);
});

it('renders without crashing', () => {
  shallow(<NewGame />);
});
