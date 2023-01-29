
import {createStore} from 'redux';

const INITIAL_COUNTER_STATE = {
    value : 1,
    maxValue : 15,
};

const counterReducer = (state = INITIAL_COUNTER_STATE , action) => {
    switch(action.type) {
        case 'decrease'
        : return {
            ...state,
            value : state.value > 1 ? state.value-1 : state.value,
        };

        case 'increase'
        : return {
            ...state,
            value : state.value < state.maxValue ? state.value+1 : state.value,
        }
        default : return state;
    }
}

// global store
const store = createStore(counterReducer);
export default store;
