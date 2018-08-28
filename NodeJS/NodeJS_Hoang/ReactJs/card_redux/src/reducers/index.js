import { combineReducers } from "redux";
import products from "./products";
import card from "./card";
import message from './message'

const appReducers = combineReducers({
	products,
	card,
	message
});

export default appReducers;
