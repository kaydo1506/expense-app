
import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});
test('should setup text filter value', () => {
    const text = 'e';
    const state = filtersReducer(text, { type: '@@INIT' });
    expect(state).toBe(text);
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});
test('should set start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate,
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});
test('should set end date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate,
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});
