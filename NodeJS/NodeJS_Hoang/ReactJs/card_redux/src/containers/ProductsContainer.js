import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "./../components/Product";
class ProductsContainer extends Component {
	render() {
		const { products } = this.props;
		return <Products>
			{this.ShowProducts(products)}
		</Products>;
	}

	ShowProducts(products) {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return <Product key={index} product={product} />;
			});
		}

		return result;
	}
}

const mapStateToProps = state => {
	return {
		products: state.products
	};
};

export default connect(
	mapStateToProps,
	null
)(ProductsContainer);
