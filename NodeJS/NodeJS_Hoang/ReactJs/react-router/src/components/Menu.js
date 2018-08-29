import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => {
				console.log(match);
				const active = match ? "active" : "";
				const classCurrent = "nav-item";
				const classN = `${active} ${classCurrent}`;
				return (
					<li className={classN}>
						<Link to={to} className="nav-link">
							{label}
						</Link>
					</li>
				);
			}}
		/>
	);
};
class Menu extends Component {
	render() {
		return <div>
			<nav className="navbar navbar-expand-lg navbar-light warning-color lighten-5">
						<div
							className="collapse navbar-collapse"
							id="basicExampleNav"
						>
							<ul className="navbar-nav mr-auto">
								<MenuLink
									label="Trang Chủ"
									to="/"
									activeOnlyWhenExact={true}
								/>

								<MenuLink label="About" to="/about" />

								<MenuLink label="Contact" to="/contact" />

								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										id="navbarDropdownMenuLink"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Dropdown
									</a>
									<div
										className="dropdown-menu dropdown-primary"
										aria-labelledby="navbarDropdownMenuLink"
									>
										<a className="dropdown-item" href="">
											Action
										</a>
										<a className="dropdown-item" href="">
											Another action
										</a>
										<a className="dropdown-item" href="">
											Something else here
										</a>
									</div>
								</li>
							</ul>
						</div>
					</nav>
		</div>;
	}
}

export default Menu;
