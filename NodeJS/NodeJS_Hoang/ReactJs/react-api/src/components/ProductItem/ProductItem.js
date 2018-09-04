import React, { Component } from "react";

class ProductItem extends Component {
	render() {
		const { product, index } = this.props;
		const statusName = product.status ? "Còn Hàng" : "Hết Hàng";
		const statusClass = product.status ? "waring" : "default";
		return (
			<tr>
				<td>{index + 1}</td>
				<td>{product.id}</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>
					<span className={`label label-${statusClass}`}>
						{statusName}
					</span>
				</td>
				<td>
					<button type="button" className="btn btn-success">
						Sủa
					</button>
					<button type="button" className="btn btn-danger">
						Xóa
					</button>
				</td>
			</tr>
		);
	}
}

export default ProductItem;
