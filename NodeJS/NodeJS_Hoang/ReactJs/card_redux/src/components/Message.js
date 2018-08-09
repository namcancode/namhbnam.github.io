import React, { Component } from "react";

class Message extends Component {
	render() {
		return (
			<h3>
				<span className="badge amber darken-2">
					Mua Hàng Thành Công !
				</span>
				<button className="btn aqua-gradient btn-rounded">Aqua</button>
			</h3>
		);
	}
}

export default Message;
