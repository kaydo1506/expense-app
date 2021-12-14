import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
// import uuid from 'uuid';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const value = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id,
    });
    expect(value).toEqual([expenses[1], expenses[2]]);
});

test('should remove expense if id not found', () => {
    const value = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    });
    expect(value).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add expense', () => {
    const value = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',

        expense: { description: '', id: '4' },
    });
    expect(value.length).toBe(4);
});

test('should edit expense', () => {
    const value = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: { note: 'I added something new' },
    });
    expect(value[0].note).toBe('I added something new');
});

test('should return expenses if no valid id', () => {
    const value = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: '9',
        updates: { note: 'I added something new' },
    });
    expect(value).toEqual(expenses);
});
test('Should set expenses', () => {
    const state = expensesReducer(expenses, {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]],
    });
    expect(state).toEqual([expenses[1]]);
});
