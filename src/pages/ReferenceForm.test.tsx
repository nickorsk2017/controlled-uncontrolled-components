import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('home', () => {
  it('renders without crashing given the required props', () => {
    const wrapper = shallow(<div>Test</div>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})