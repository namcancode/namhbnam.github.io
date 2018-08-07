import * as types from "../constant/ActionTypes";

const initialState = {
	by: "name",
	value: 1
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SORT:
			return {
			by:action.sort.by,
			value:action.sort.value
			}
		default:
			return state;
	}
};
export default myReducer;
