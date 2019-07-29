import React from 'react';
import { shallow } from 'enzyme';
import AccountCreate from './AccountCreate';

describe('<AccountCreate />', () => {
  test('renders', () => {
    const wrapper = shallow(<AccountCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
