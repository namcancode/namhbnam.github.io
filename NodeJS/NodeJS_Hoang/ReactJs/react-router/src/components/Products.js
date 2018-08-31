import React, { Component } from "react";
import { NavLink,Route } from "react-router-dom";
import Product  from "./Product";
class Products extends Component {
	render() {
		const products = [
			{
				id: 1,
				slug: "iphone",
				name: "iphone X",
				price: 3500000
			},
			{
				id: 2,
				slug: "samsung",
				name: "Samsung S9",
				price: 1200000
			},
			{
				id: 3,
				slug: "note",
				name: "Note 9",
				price: 2800000
			}
		];
		const { match } = this.props;
		const { url } = match;
		const result = products.map((product, index) => {
			return (
				<NavLink to={`${url}/${product.slug}`} key={index}>
					<li className="list-group-item ">
						{product.id} - {product.name} - {product.price}
					</li>
				</NavLink>
			);
		});

		const {location} = this.props
		console.log(location);

		return (
			<div className="container">
				<h1>Đấy là danh sách sản phẩm</h1>
				<div className="row">
					<ul className="list-group">{result}</ul>
				</div>
				<div className="row">
					<Route path="/product/:name" component={Product} />
				</div>
			</div>
		);
	}
}

export default Products;
