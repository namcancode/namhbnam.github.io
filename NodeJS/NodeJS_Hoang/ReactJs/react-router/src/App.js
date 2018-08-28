import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
class App extends Component {
	render() {
		return (
		<Router>
      	<div className="App">
				{/* Menu */}
				<nav class="nav justify-content-center|justify-content-end">
					<a class="nav-link active" href="">
						Trang chủ
					</a>
					<a class="nav-link" href="">
						Liên Hệ
					</a>
				</nav>
				{/* Nội Dung */}
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
			</div>
    </Router>
		);
	}
}

export default App;
