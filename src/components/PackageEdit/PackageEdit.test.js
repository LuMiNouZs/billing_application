import React from 'react';
import { shallow } from 'enzyme';
import PackageEdit from './PackageEdit';

describe('<PackageEdit />', () => {
  test('renders', () => {
    const wrapper = shallow(<PackageEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
