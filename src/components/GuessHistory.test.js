import React from 'react';
import { shallow } from 'enzyme';
import GuessHistory from './GuessHistory';

it('Testing is working', () => {
  expect(2 + 2).toBe(4);
});

it('renders without crashing', () => {
  shallow(<GuessHistory />);
});
