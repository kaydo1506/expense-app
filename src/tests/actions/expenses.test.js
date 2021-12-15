import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';
import { get, ref, remove, set } from 'firebase/database';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, createdAt, note, amount }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    set(ref(db, 'expenses'), expensesData).then(() => done());
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store
        .dispatch(startRemoveExpense({ id }))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id,
            });
            return get(ref(db, `expenses/${id}`));
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('222a', { note: 'New note value' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '222a',
        updates: { note: 'New note value' },
    });
});

test('should setup addExpense action object with provided value', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2],
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Some',
        amount: 2000,
        createdAt: 1000,
        note: 'This note',
    };
    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            // store.getActions() will return all the items in the mock store inside an array
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData,
                },
            });
            return get(ref(db, `expenses/${actions[0].expense.id}`));
            // done() forces jest to act asynchronously i.e it waits for firebase and other necesary functions to run before declaring success or failure
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});
test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: '',
    };
    store
        .dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults,
                },
            });
            return get(ref(db, `expenses/${actions[0].expense.id}`));
            // done() forces jest to act asynchronously i.e it waits for firebase and other necesary functions to run before declaring success or failure
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
});

test('should setup set expense action object with date', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses,
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses,
        });
        done();
    });
});
