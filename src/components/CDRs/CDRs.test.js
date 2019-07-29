import React from 'react';
import { shallow } from 'enzyme';
import CDRs from './CDRs';

describe('<CDRs />', () => {
  test('renders', () => {
    const wrapper = shallow(<CDRs />);
    expect(wrapper).toMatchSnapshot();
  });
});
