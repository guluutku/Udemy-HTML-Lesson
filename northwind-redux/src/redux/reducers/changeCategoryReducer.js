import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function changeCategoryReducer(state = initialState.currentCategory, actions) {
    switch (actionTypes) {
        default:
            return state;

        case actionTypes.CHANGE_CATEGORY:
            return actions.payload;
    }
}
