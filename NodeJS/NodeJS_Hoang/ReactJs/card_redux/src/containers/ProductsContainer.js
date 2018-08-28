
import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "./../components/Product";
import PropTypes from "prop-types";
import { actAddToCard, actChangeMessage } from "../actions/index";
class ProductsContainer extends Component {
	render() {
		const { products } = this.props;
		return <Products>{this.ShowProducts(products)}</Products>;
	}

	ShowProducts(products) {
		let result = null;
		const { onAddToCard,onChangeMessage } = this.props;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<Product
						key={index}
						product={product}
						onAddToCard={onAddToCard}
						onChangeMessage = {onChangeMessage}
					/>
				);
			});
		}
		return result;
	}
}
ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired
		})
	).isRequired,
	onChangeMessage :PropTypes.func.isRequired,
	onAddToCard:PropTypes.func.isRequired
};
const mapStateToProps = state => {
	return {
		products: state.products
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCard: product => {
			dispatch(actAddToCard(product, 1));
		},
		onChangeMessage : message => {
			dispatch(actChangeMessage(message))
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsContainer);
