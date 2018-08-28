import * as Types from "../contants/ActionType";

export const actAddToCard = (product, quantity) => {
	return {
		type: Types.ADD_TO_CARD,
		product,
		quantity
	};
};

export const actChangeMessage = message => {
	return {
		type: Types.CHANGE_MESSAGE,
		message
	};
};

export const actDeleteProductInCard = product => {
	return {
		type:Types.DELETE_PRODUCT_IN_CARD,
		product
	}
};

export const actUpdateProductInCard = (product,quantity) => {
	return{
		type:Types.UPDATE_PRODUCT_IN_CARD,
		product,
		quantity
	}
}
