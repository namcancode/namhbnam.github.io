import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			txtUsername: "",
			txtPassword: ""
		};
	}

	onChange = e => {
		const target = e.target;
		const name = target.name;
		const value =
			target.type === "checkbox" ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	};

	onLogin = e => {
		const { txtUsername, txtPassword } = this.state;
		e.preventDefault();
		if (txtUsername === "admin" && txtPassword === "admin") {
			localStorage.setItem(
				"user",
				JSON.stringify({
					username: txtUsername,
					password: txtPassword
				})
			);
		}
	};

	render() {
		const { txtUsername, txtPassword } = this.state;
		const loggedInUser = localStorage.getItem("user");
		const { location } = this.props;
		if (loggedInUser) {
			return (
				<Redirect
					to={{
						pathname: "/product",
						state: {
							from: location
						}
					}}
				/>
			);
		}
		return (
			<div className="row mg-0">
				<div className="col-xs-12 col-sm-12 col-md6 col-lg-12">
					<div className="container">
						<form onSubmit={this.onLogin}>
							<div className="form-group row">
								<legend className="col-form-legend col-sm-1-12">
									Đăng nhập
								</legend>
								<div className="col-sm-1-12" />
							</div>
							<div className="form-group row">
								<label
									htmlFor="inputName"
									className="col-sm-1-12 col-form-label"
								/>
								<div className="col-sm-1-12">
									<input
										type="text"
										className="form-control"
										name="txtUsername"
										id="inputName"
										placeholder="UserName"
										value={txtUsername}
										onChange={this.onChange}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									htmlFor="inputPassword"
									className="col-sm-1-12 col-form-label"
								/>
								<div className="col-sm-1-12">
									<input
										type="password"
										className="form-control"
										name="txtPassword"
										id="inputPassword"
										placeholder="Password"
										value={txtPassword}
										onChange={this.onChange}
									/>
								</div>
							</div>

							<div className="form-group row">
								<div className="offset-sm-2 col-sm-10">
									<button
										type="submit"
										className="btn btn-primary"
									>
										Đăng Nhập
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
