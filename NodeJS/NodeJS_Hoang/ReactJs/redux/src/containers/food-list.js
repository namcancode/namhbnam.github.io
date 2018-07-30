import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class FoodList extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<div>
				<ul>
					<li />
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		foods: state.foods
	};
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FoodList);
