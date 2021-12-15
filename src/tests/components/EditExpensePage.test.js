import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expense from '../fixtures/expenses';

let history, wrapper, editExpense, startRemoveExpense;
beforeEach(() => {
    history = { push: jest.fn() };
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expense[0]}
        />
    );
});

test('should render EditExpense page', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense[0].id, expense[0]);
});
test('should render startRemoveExpense', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense[0].id });
});
