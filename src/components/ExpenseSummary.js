import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenses }) => {
    const res = expensesTotal(expenses);

    const ans = numeral(res / 100).format('0,0.00');
    return (
        <div>
            <h2>
                {' '}
                {expenses.length === 1
                    ? `Viewing ${expenses.length} expense totalling ₦${ans}`
                    : `Viewing ${expenses.length} expenses totalling ₦${ans}`}
            </h2>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
    };
};
export default connect(mapStateToProps)(ExpenseSummary);
