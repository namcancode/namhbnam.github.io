// cach 1 tao ra 1 ham are
exports.area = (width, height) => width * height;
//cach 2 lay file nay lam module luon, su dung khi co nhieu ham nhieu thuoc tinh
module.exports = {
	area: (width, height) => width * height
};
//cach 3 khi cần dùng có nhiều hàm thuộc tính, trong đó lại có thêm nhiều điều kiện cần xử lý
module.exports = {
	area: (width, height) => {
		console.log("đang tính");
		return width * height;
    },
    curentDateTime : Date(),
    directoryName: __dirname,
    fileName: __filename,
};
