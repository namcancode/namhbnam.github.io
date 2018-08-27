import * as types from "../contants/ActionType";

export const actAddtoCard = (product, quantity) => {
	return {
		types: types.ADD_TO_CARD,
		product,
		quantity
	};
};
