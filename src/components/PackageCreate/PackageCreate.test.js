import React from 'react';
import { shallow } from 'enzyme';
import PackageCreate from './PackageCreate';

describe('<PackageCreate />', () => {
  test('renders', () => {
    const wrapper = shallow(<PackageCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
