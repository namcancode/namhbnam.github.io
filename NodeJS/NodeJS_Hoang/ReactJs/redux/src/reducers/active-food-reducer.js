import {SELECT_FOOD} from '../actions/actionTypes';
export default (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case SELECT_FOOD:
            return action.payload;
        default:
            return {};
    }
    return null;
}