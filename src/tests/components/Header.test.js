import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

// react-test-renderer
// allows us to resnder our components to pure javascript objects for the sake of testing

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);

    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
});
