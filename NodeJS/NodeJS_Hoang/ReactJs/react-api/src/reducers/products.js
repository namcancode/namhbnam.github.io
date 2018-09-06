const initialState = [
	{
		id: 1,
		name: "Iphone 6 Plus",
		price: 400,
		status: true
	},
	{
		id: 2,
		name: "Iphone X",
		price: 600,
		status: false
	},
	{
		id: 3,
		name: "Samsung S9",
		price: 600,
		status: true
	}
];

const products = (state = initialState, action) => {
	switch (action.type) {
		default:
			return [...state];
	}
};
export default products;
