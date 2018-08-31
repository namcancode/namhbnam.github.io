import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
	{
		name: "Trang Chủ",
		to: "/",
		exact: true
	},
	{
		name: "About",
		to: "/about",
		exact: false
	},
	{
		name: "Contact",
		to: "/contact",
		exact: false
	},
	{
		name: "Product",
		to: "/product",
		exact: false
	},
	{
		name: "Đăng Nhập",
		to: "/login",
		exact: false
	}
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => {
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
		return (
			<div>
				<nav className="navbar navbar-expand navbar-light warning-color lighten-5">
					<div
						className="collapse navbar-collapse"
						id="basicExampleNav"
					>
						<ul className="navbar-nav mr-auto">
							{this.showMenus(menus)}

						</ul>
					</div>
				</nav>
			</div>
		);
	}

	showMenus = menus => {
		let result = null;
		if (menus.length > 0) {
			result = menus.map((menu, index) => {
				return (
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact}
					/>
				);
			});
		}
		return result;
	};
}

export default Menu;
