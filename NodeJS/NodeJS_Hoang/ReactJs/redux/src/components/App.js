import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import FoodContainer from '../containers/food-list'
import FoodDetailContainer from '../containers/food-detail'
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Redux</h1>
				</header>
				<div className="App-intro">
					<p>This is a tutorial React app with Redux</p>
				</div>
				<h2>List of foods:</h2>
				<FoodContainer />
				<hr />
				<h2>Food details:</h2>
				<FoodDetailContainer />
			</div>
		);
	}
}

export default App;
