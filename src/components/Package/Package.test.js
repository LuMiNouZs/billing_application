import React from 'react';
import { shallow } from 'enzyme';
import Package from './Package';

describe('<Package />', () => {
  test('renders', () => {
    const wrapper = shallow(<Package />);
    expect(wrapper).toMatchSnapshot();
  });
});
