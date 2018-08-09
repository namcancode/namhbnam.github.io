const initialState = [
	{
		id: 1,
		name: "Iphone X",
		image:
			"https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483219613202713_1.jpg",
		description: "Sản phẩm do apple sản xuất",
		price: 500,
		inventory: 10,
		rating: 3
	},
	{
		id: 2,
		name: "Iphone 8 Plus",
		image:
			"https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600.jpg",
		description: "Sản phẩm do China sản xuất",
		price: 300,
		inventory: 15,
		rating: 4
	},
	{
		id: 3,
		name: "Samsung S9",
		image:
			"https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_g960uzkaxaa_samsung_galaxy_s9_1394702.jpg",
		description: "Sản phẩm do Samsung sản xuất",
		price: 900,
		inventory: 5,
		rating: 5
	}
];

const products = (state = initialState, action) => {
	switch (action.type) {
		default:
			return [...state];
	}
};
export default products;
