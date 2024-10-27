import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
    let newState;
    switch (action.type) {
        default:
            return state;

        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload);

        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);

        case actionTypes.DECREASE_COUNTER:
            // eslint-disable-next-line no-unused-vars
            return (newState = state - action.payload);
    }
}

export default counterReducer;
