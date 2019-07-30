import React from 'react';
import { shallow } from 'enzyme';
import AccountEdit from './AccountEdit';

describe('<AccountEdit />', () => {
  test('renders', () => {
    const wrapper = shallow(<AccountEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
