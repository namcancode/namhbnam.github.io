import * as types from "../contants/ActionType";
const data = JSON.parse(localStorage.getItem("CARD"));
const initialState = [
	{
		product: {
			id: 2,
			name: "Iphone 8 Plus",
			image:
				"https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600.jpg",
			description: "Sản phẩm do China sản xuất",
			price: 300,
			inventory: 15,
			rating: 4
		},
		quantity: 5
	},
	{
		product: {
			id: 1,
			name: "Iphone X",
			image:
				"https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483219613202713_1.jpg",
			description: "Sản phẩm do apple sản xuất",
			price: 500,
			inventory: 10,
			rating: 3
		},
		quantity: 6
	}
];

const card = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_TO_CARD:
			console.log(action);
			return [...state];
		default:
			return [...state];
	}
};
export default card;
