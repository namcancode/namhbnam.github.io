import React, { Component } from "react";

class Product extends Component {
	render() {
		const {match} = this.props
		// console.log(match);
		const name = match.params.name
		console.log(name)
		return <div><h1>Đấy là chi tiết sản phẩm: {name}</h1></div>;
	}
}

export default Product;
