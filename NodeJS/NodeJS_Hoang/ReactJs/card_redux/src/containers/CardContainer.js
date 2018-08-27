import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "../components/Card";
import * as Message from "../contants/Message";
import CardItem from "../components/CardItem";
import CardResult from "../components/CardResult";
class CardContainer extends Component {
	render() {
		const { card } = this.props;
		return (
			<Card>
				{this.showCardItem(card)}
				{this.showCardTotalAmount(card)}
			</Card>
		);
	}

	showCardItem = card => {
		let result = Message.MSG_CARD_EMPTY;
		if (card.length > 0) {
			result = card.map((item, index) => {
				return <CardItem key={index} item={item} index={index} />;
			});
		}
		return result;
	};
	showCardTotalAmount = card => {
		let result = null;
		if (card.length > 0) {
			result =  <CardResult card={card} />;
		}
		return result;
	};
}
CardContainer.propTypes = {
	card: PropTypes.arrayOf(
		PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
				rating: PropTypes.number.isRequired
			}).isRequired,
			quantity: PropTypes.number.isRequired
		})
	).isRequired
};

const mapStateToProps = state => {
	return {
		card: state.card
	};
};

export default connect(
	mapStateToProps,
	null
)(CardContainer);
