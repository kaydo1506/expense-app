import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('should render expense summary with single expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[1]]} />);
    expect(wrapper).toMatchSnapshot();
});
test('should render expense summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});
