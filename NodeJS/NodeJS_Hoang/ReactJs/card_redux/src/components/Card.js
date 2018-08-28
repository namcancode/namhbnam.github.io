import React, { Component } from "react";
// import CardItem from "./CardItem";
class Card extends Component {
	render() {
		const {children} = this.props;
		return (
			<section className="section">
				<div className="table-responsive">
					<table className="table product-table">
						<thead>
							<tr>
								<th />
								<th>Sản Phẩm</th>
								<th>Giá</th>
								<th>Số Lượng</th>
								<th>Tổng Cộng</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{children}
						</tbody>
					</table>
				</div>
			</section>
		);
	}
}

export default Card;
