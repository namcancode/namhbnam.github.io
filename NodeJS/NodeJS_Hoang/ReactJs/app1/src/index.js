import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
/*
const user = {
	name: "Nam",
	email: "nguyennamit.94@gmail.com"
};
function updateTime() {
	const element = (
		<div>
			<h1>Timer update example</h1>
			<h2>Current timer is: {new Date().toLocaleTimeString()}</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById("root"));
}
*/
/*
function UserInfo(props) {
	return (
		<div>
			<p>Name:{props.name}</p>
			<p>Email:{props.email}</p>
		</div>
    );
}
*/
/*
class UserDetail extends React.Component {
	render() {
		return (
			<div className="UserDetail">
				<p>Name:{this.props.name}</p>
				<p>Email:{this.props.email}</p>
			</div>
		);
	}
}
class UserInfo extends React.Component {
	render() {
		return (
			<div>
                <UserDetail name={this.props.name} email= {this.props.email}/>
				<div className="OtherInfo">
					<p>Other Information:{this.props.otherInformation}</p>
				</div>
			</div>
		);
	}
}
const element = (
	<UserInfo
		name="Nam"
		email="nguyennamit@gmail.com"
		otherInformation="i Like Nodejs"
	/>
);
ReactDOM.render(element, document.getElementById("root"));
// setInterval(updateTime,1000)
// registerServiceWorker();
*/
/*
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { seconds: 0 };
	}
	incrementCounter() {
		this.setState((prevState, props) => ({
			seconds: prevState.seconds + 1
		}));
	}
	componentDidMount() {
		this.timerID = setInterval(
            ()=> this.incrementCounter(),1000
        );
	}
	componentWillUnmount() {
        clearInterval(this.timerID)
    }
	render() {
		return (
			<div>
				<h1>This is a counting machine!</h1>
				<h2>Seconds: {this.state.seconds} s </h2>
			</div>
		);
	}
}
ReactDOM.render(<Counter />, document.getElementById("root"));
*/
/*
class ToggleButton extends React.Component {
	constructor(props) {
		super(props);
        this.state = { isOn: true };
        this.buttonClick = this.buttonClick.bind(this)
    }

    // buttonClick =()=>{
    //     this.setState(prevState =>(
    //         {
    //             isOn : !prevState.isOn
    //         }
    //     ))
    // }


   buttonClick(){
    this.setState(prevState =>(
        {
            isOn : !prevState.isOn
        }
    ))
   }
	render() {
		return (
			<button className="ToggleButton" onClick = {this.buttonClick}>This is a toggle button:
            {this.state.isOn ? " ON":" OFF"}
            </button>
		);
	}
}
ReactDOM.render(<ToggleButton />, document.getElementById("root"));
*/
/*
class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: false };
	}
	handleLogout = () => {
		this.setState({ isLoggedIn: false });
	};
	handleLogin = () => {
		this.setState({ isLoggedIn: true });
	};
	render() {
		let myButton = null;
		let title =null;
		if (this.state.isLoggedIn) {
			myButton = <button className="buttonTest" onClick={this.handleLogout}> Login</button>;
		} else {
			myButton = <button className="buttonTest" onClick={this.handleLogin}> Logout</button>;
		}
		title = this.state.isLoggedIn ? <h1>Loged in </h1>: <h1>Loged out</h1>
		return (
			<div>
				{title}
				{myButton}
				</div>
		);
	}
}

ReactDOM.render(<LoginComponent />, document.getElementById("root"));
*/
/*
export default class MailComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Mail statistics</h1>
				{this.props.newMessages.length > 0 && (
					<h2>
						You have {this.props.newMessages.length} new messages.
					</h2>
				)}
			</div>
		);
	}
}
ReactDOM.render(<MailComponent newMessages={["How old are you","Hello World"]} />, document.getElementById("root"));
*/
/*
function ListItem(props) {
	return <li>{props.value}</li>;
}
class AnimalsComponent extends Component {
	constructor(props) {
		super(props);
		this.listItems = props.animals.map((animal, index) => {
			return <ListItem key={animal} value={index.toString() + "-" +animal.name} />;
		});
	}
	render() {
	return (<ul>{this.listItems}</ul>);
	}
}
// const animals = ["lion", "tiger", "dog", "cat", "dinosaur"];
const animals = [
	{
		id: "xy000",
		name: "lion",
		title: "This is a lion"
	},
	{
		id: "xy001",
		name: "tiger",
		title: "This is a tiger"
	},
	{
		id: "xy002",
		name: "dog",
		title: "This is a dog"
	},
	{
		id: "xy003",
		name: "dinosaur",
		title: "This is a dinosaur"
	}
];
ReactDOM.render(
	<AnimalsComponent animals={animals} />,
	document.getElementById("root")
);
*/
/*
class FormComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			yourName: "",
			numberOfFriends: 0
		};
	}
	handleChange = e => {
		const textName = e.target.name;
		const textValue = e.target.value;
		this.setState((state, props) => {
			return {
				[textName]: textValue
			};
		});
		// this.setState({
		// 	[e.target.name]:e.target.value
		// })
	};
	handleSubmit = e => {
		e.preventDefault();
		// console.log("You submitted text data : " + this.state.textData);
		document.querySelector(".dataText h3").innerText = this.state.yourName;
		document.querySelector(
			".dataText h4"
		).innerText = this.state.numberOfFriends;
	};
	render() {
		return (
			<div className="dataText">
				<h3 />
				<h4 />
				<form onSubmit={this.handleSubmit}>
					<label>
						Your name:
						<input
							type="text"
							name="yourName"
							value={this.state.yourName}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<label>
						Number of friends :
						<input
							type="Number"
							name="numberOfFriends"
							value={this.state.numberOfFriends}
							onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="Submit your name" />
				</form>
			</div>
		);
	}
}

ReactDOM.render(<FormComponent />, document.getElementById("root"));
*/
/*
class PanelComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.up}
				{this.props.children}
				{this.props.down}
			</div>
		);
	}
}
function UpComponent(props) {
	return <div className="red">This is RED</div>;
}
function DownComponent(props) {
	return <div className="blue">This is BLUE</div>;
}
*/
/*
ReactDOM.render(
	<PanelComponent
	up={<UpComponent />}
	down={<DownComponent />}>
	<p>This is the children part</p>
	</PanelComponent>,
	document.getElementById("root")
);
*/
ReactDOM.render(<App/>,document.getElementById("root"));