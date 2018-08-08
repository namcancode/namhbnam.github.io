import React, { Component } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Message from "./components/Message";
import Card from "./components/Card";
import Footer from "./components/Footer";
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main id="mainContainer">
					<div className="container">
						<Products />
						<Message />
						<Card />
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
