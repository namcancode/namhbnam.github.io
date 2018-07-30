import React, { Component } from "react";
import { connect } from "react-redux";

export class FoodList extends Component {
	createFoodListItems() {
		return this.props.foods.map(eachFood => {
			return <li key={eachFood.id}>Name:{eachFood.name}</li>;
		});

	}

	render() {
		return (
			<div>
				<ul>{this.createFoodListItems()}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		foods: state.foods
	};
};

export default connect(mapStateToProps)(FoodList);

