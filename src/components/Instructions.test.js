import React from 'react';
import { shallow } from 'enzyme';
import Instructions from './Instructions';

it('Testing is working', () => {
  expect(2 + 2).toBe(4);
});

it('renders without crashing', () => {
  shallow(<Instructions />);
});
