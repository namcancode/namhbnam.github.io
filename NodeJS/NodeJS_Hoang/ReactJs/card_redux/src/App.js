import React, { Component } from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CardContainer from "./containers/CardContainer";
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="mainContainer">
					<div className="container">
						<ProductsContainer />
						<Message />
						<CardContainer />
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
