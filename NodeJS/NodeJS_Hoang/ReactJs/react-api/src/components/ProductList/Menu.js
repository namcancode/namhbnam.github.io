import React, { Component } from "react";

class ProductList extends Component {
	render() {
		return (
			<div className="navbar">
				<a className="navbar-brand" href="">
					Call Api
				</a>
				<ul className="nav navbar-nav">
					<li className="active">
						<a href="">Trang Chủ</a>
					</li>
					<li>
						<a href="">Quản lý sản phẩm</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default ProductList;
