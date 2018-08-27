import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class CardContainer extends Component {
	render() {
		const { card } = this.props;
		console.log(card);
		return <div />;
	}
}
CardContainer.propTypes = {
    card: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired
}

const mapStateToProps = state => {
	return {
		card: state.card
	};
};

export default connect(
	mapStateToProps,
	null
)(CardContainer);
