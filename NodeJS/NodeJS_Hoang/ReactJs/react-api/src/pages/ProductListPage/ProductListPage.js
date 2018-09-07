import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import callApi from "./../../utils/apiCaller";
class ProductListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}
	componentDidMount() {
		callApi("products", "GET", null).then(res =>{
			this.setState({
				products: res.data
			})
		})
	}
	onDelete = (id) => {
		const {products} = this.state
		callApi(`products/${id}`, "DELETE", null).then(res =>{
			if(res.status === 200) {
				const index = this.findIndex(products,id)
				if(index !== -1){
					products.splice(index,1);
					this.setState({
						products
					})
				}
			}
		})
	}

	findIndex = (products,id) => {
		let result = -1
		products.forEach((product,index) => {
		  if(product.id === id){
			  result = index
		  }
		})

		return result
	}
	render() {
		// const { products } = this.props;
		const { products } = this.state;

		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to="/product/add" className="btn btn-info">
					Thêm sản phẩm
				</Link>
				<ProductList>{this.showProducts(products)}</ProductList>
			</div>
		);
	}

	showProducts(products) {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<ProductItem key={index} product={product} index={index}
					onDelete = {this.onDelete}
					/>
				);
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
)(ProductListPage);
