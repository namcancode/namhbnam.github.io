import * as types from "../constant/ActionTypes";

const initialState = {
	id:'',
	name:'',
	status: false
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.EDIT_TASK:
			// console.log(action);
			return action.task;
		default:
			return state;
	}
	// return state
};
export default myReducer;
