import React, { Component } from "react";
import * as Message from "../contants/Message";
class CardItem extends Component {


	render() {
		const { item } = this.props;

		return (
			<tr>
				<th scope="row">
					<img
						src={item.product.image}
						alt={item.product.name}
						className="img-fluid z-depth-0"
					/>
				</th>
				<td>
					<h5>
						<strong>{item.product.name}</strong>
					</h5>
				</td>
				<td>{item.product.price}$</td>
				<td className="center-on-small-only">
					<span className="qty">{item.quantity}</span>
					<div
						className="btn-group radio-group"
						data-toggle="buttons"
					>
						<label
							onClick={() =>
								this.onUpdateQuantity(
									item.product,
									item.quantity - 1
								)
							}
							className="btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light"
						>
							<a>—</a>
						</label>
						<label
							onClick={() =>
								this.onUpdateQuantity(
									item.product,
									item.quantity + 1
								)
							}
							className="btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light"
						>
							<a>+</a>
						</label>
					</div>
				</td>
				<td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
				<td>
					<button
						type="button"
						className="btn btn-sm btn-primary waves-effect waves-light"
						data-toggle="tooltip"
						data-placement="top"
						title=""
						data-original-title="Remove item"
						onClick={() => this.onDelete(item.product)}
					>
						X
					</button>
				</td>
			</tr>
		);
	}
	showSubTotal = (price, quantity) => {
		return price * quantity;
	};
	onDelete = product => {
		const { onDeleteProductInCard, onChangeMessage } = this.props;
		onDeleteProductInCard(product);
		onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS);
	};
	onUpdateQuantity = (product, quantity) => {
		const { onDeleteProductInCard, onChangeMessage,onUpdateProductInCard } = this.props;
		if(quantity > 0){
			onChangeMessage(Message.MSG_UPDATE_CARD_SUCCESS);
		}
		else{
			onDeleteProductInCard(product);
			onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS);
		}
		onUpdateProductInCard(product,quantity)
	};
}

export default CardItem;
