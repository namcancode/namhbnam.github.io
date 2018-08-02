import * as types from "../constant/ActionTypes";

const initialState = false;

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_FORM:
			return !state;
		case types.OPEN_FORM:
			state = true;
			return state;
		case types.CLOSE_FORM:
			state = false;
			return state;
		default:
			return state;
	}
	// return state
};
export default myReducer;
