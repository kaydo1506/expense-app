import { push, ref, get, remove, update } from 'firebase/database';
import db from '../firebase/firebase';
// import uuid from 'uuid';
// what happens
// 1- component calls action generator
// 2- action generator returns object
// 3- component dispatches object
// 4- redux store changes

// what will hapen with firebase
// 1- components call action generator
// 2- action generator returns function
// 3- component dispatches function (?)
// 4- funtion runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE action generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense,
});
// addExpense starter
export const startAddExpense = (expenseData = {}) => {
    // middleware function
    return (dispatch) => {
        // destructuring
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;

        const expense = { description, note, amount, createdAt };

        return push(ref(db, 'expenses'), expense).then((ref) => {
            dispatch(
                addExpense({
                    id: ref.key,
                    ...expense,
                })
            );
        });
    };
};
// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses,
});
export const startSetExpenses = () => {
    return (dispatch) => {
        return get(ref(db, 'expenses')).then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};

// REMOVE_EXPENSE action generator
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return remove(ref(db, `expenses/${id}`)).then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});
export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return update(ref(db, `expenses/${id}`), updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};
