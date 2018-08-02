import * as types from "../constant/ActionTypes";

const data = JSON.parse(localStorage.getItem("tasks"));
const initialState = data ? data : [];

const genkey = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
};
const randomID = () => {
	return (
		genkey() +
		genkey() +
		"-" +
		genkey() +
		genkey() +
		genkey() +
		genkey() +
		"-" +
		genkey() +
		genkey()
	);
};
const findIndex = (tasks, id) => {
	var result = -1;
	tasks.forEach((task, index) => {
		if (task.id === id) {
			result = index;
		}
	});
	return result;
};

const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_ALL:
			return state;
		case types.ADD_TASK:
			const newTask = {
				id: randomID(),
				name: action.task.name,
				status: action.task.status ? true : false
			};
			state.push(newTask);
			localStorage.setItem("tasks", JSON.stringify(state));
			return [...state];
		case types.UPDATE_STATUS_TASK:
			const index = findIndex(state, action.id);
			state[index] = {
				...state[index],
				status: !state[index].status
			};
			localStorage.setItem("tasks", JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK:
			const indexDelete = findIndex(state, action.id);
			if (indexDelete !== -1) {
				state.splice(index, 1);
				localStorage.setItem("tasks", JSON.stringify(state));
			}
			return [...state];
		default:
			return state;
	}
};
export default myReducer;
