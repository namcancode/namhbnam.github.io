import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CardContainer from "./containers/CardContainer";
import MessageContainer from "./containers/MessageContainer";
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="mainContainer">
					<div className="container">
						<ProductsContainer />
						<MessageContainer />
						<CardContainer />
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
