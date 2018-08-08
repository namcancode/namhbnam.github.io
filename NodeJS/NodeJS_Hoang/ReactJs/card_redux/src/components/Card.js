import React, { Component } from "react";
import CardItem from "./CardItem";
import CardResult from "./CardResult";
class Card extends Component {
	render() {
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
							<CardItem />
							<CardItem />
							<CardItem />
							<CardResult />
						</tbody>
					</table>
				</div>
			</section>
		);
	}
}

export default Card;
