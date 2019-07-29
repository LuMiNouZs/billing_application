import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from './DashBoard';

describe('<DashBoard />', () => {
  test('renders', () => {
    const wrapper = shallow(<HeaderContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
