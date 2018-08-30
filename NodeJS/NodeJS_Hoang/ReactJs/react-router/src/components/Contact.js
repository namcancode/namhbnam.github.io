import React, { Component } from "react";
import { Prompt } from "react-router-dom";
class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: false
		};
	}
	onClick = isChecked => {
		this.setState({
			isChecked: !isChecked
		});
	};
	render() {
		const { isChecked } = this.state;
		return (
			<div>
				<h1>Đây là trang liên hệ</h1>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => this.onClick(true)}
				>
					cho Phép
				</button>
				<button
					type="button"
					className="btn btn-warning"
					onClick={() => this.onClick(false)}
				>
					Không Cho Phép
				</button>
				<Prompt
					when={isChecked}
					message={location =>
						`Bạn chắc chắn muốn đi đến ${location.pathname}`
					}
				/>
			</div>
		);
	}
}

export default Contact;
