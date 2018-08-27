import React, { Component } from "react";

class CardResult extends Component {
	render() {
		const {card} = this.props
		return (
			<tr>
				<td colSpan="3" />
				<td>
					<h4>
						<strong>Tổng Tiền</strong>
					</h4>
				</td>
				<td>
					<h4>
						<strong>{this.showTotalAmount(card)}$</strong>
					</h4>
				</td>
				<td colSpan="3">
					<button
						type="button"
						className="btn btn-primary waves-effect waves-light"
					>
						Complete purchase
						<i className="fa fa-angle-right right" />
					</button>
				</td>
			</tr>
		);
	}

	showTotalAmount = card =>{
		let total = 0;
		if(card.length > 0){
			for(let i = 0; i<card.length;i++){
				total += card[i].product.price * card[i].quantity
			}
		}
		return total
	}
}

export default CardResult;
