import React from 'react';
import { shallow } from 'enzyme';
import GuessButton from './GuessButton';

it('Testing is working', () => {
  expect(2 + 2).toBe(4);
});

it('renders without crashing', () => {
  shallow(<GuessButton />);
});
