import { combineReducers } from "redux";
import products from "./products";
import card from "./card";

const appReducers = combineReducers({
	products,
	card
});

export default appReducers;
