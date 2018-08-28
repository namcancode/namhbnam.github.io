import * as Types from "../contants/ActionType";
const data = JSON.parse(localStorage.getItem("CARD"));
const initialState = data ? data : [];

const card = (state = initialState, action) => {
	const { product, quantity } = action;
	let index = -1;
	switch (action.type) {
		case Types.ADD_TO_CARD:
			index = findProductInCard(state, product);
			if (index !== -1) {
				state[index].quantity += quantity;
			} else {
				state.push({
					product,
					quantity
				});
			}
			localStorage.setItem("CARD", JSON.stringify(state));
			return [...state];
		case Types.DELETE_PRODUCT_IN_CARD:
			index = findProductInCard(state, product);
			if (index !== -1) {
				state.splice(index, 1);
			}
			localStorage.setItem("CARD", JSON.stringify(state));
			return [...state];

		case Types.UPDATE_PRODUCT_IN_CARD:
			index = findProductInCard(state, product);
			if (index !== -1) {
				state[index].quantity = quantity;
			}
			localStorage.setItem("CARD", JSON.stringify(state));
			return [...state];
		default:
			return [...state];
	}
};

const findProductInCard = (card, product) => {
	let index = -1;
	if (card.length > 0) {
		for (let i = 0; i < card.length; i++) {
			if (card[i].product.id === product.id) {
				index = i;
				break;
			}
		}
	}
	return index;
};
export default card;
