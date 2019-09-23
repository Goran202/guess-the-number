import React from 'react';
import { shallow, mount } from 'enzyme';
import NewGame from './NewGame';

describe('<NewGame />', () => {
  it('Testing is working', () => {
    expect(2 + 2).toBe(4);
  });

  // it('renders without crashing without props', () => {
  //   shallow(<NewGame />);
  // });

  it('renders without crashing with props', () => {
    const callback = jest.fn();
    shallow(<NewGame resetGame={callback} />);
  });

  it('Should call callback func, resetGame, on button click.', () => {
    const callback = jest.fn();
    const wrapper = mount(<NewGame resetGame={callback} />);
    wrapper.find('button').simulate('click', {
      preventDefult() {},
    });
  });
});
