import * as Types from "../contants/ActionType";
import * as Message from '../contants/Message'
const initialState = Message.MSG_WELLCOME

const message = (state = initialState, action) => {
	switch (action.type) {
		case Types.CHANGE_MESSAGE:
		return action.message
		default:
			return state;
	}
};


export default message;
