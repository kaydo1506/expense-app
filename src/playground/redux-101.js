import { createStore } from 'redux';
// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy,
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
});
const resetCount = () => ({
    type: 'RESET',
});
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count,
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy,
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy,
            };
        case 'SET':
            return {
                count: action.count,
            };
        case 'RESET':
            return {
                count: (state.count = 0),
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const stop = store.subscribe(() => {
    console.log(store.getState());
});

/*increase */ store.dispatch(incrementCount({ incrementBy: 5 }));

/*increase */ store.dispatch(incrementCount());

/*reset */ store.dispatch(resetCount());

/*decrease */ store.dispatch(decrementCount());

/*decrease */ store.dispatch(decrementCount({ decrementBy: 10 }));

/*set */ store.dispatch(setCount({ count: 987 }));
/*decrease */ store.dispatch(decrementCount({ decrementBy: 10 }));
