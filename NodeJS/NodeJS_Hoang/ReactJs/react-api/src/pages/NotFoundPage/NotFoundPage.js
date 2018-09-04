import React, { Component } from "react";

class NotFoundPage extends Component {
	render() {
		return (
			<div className = "container">
			<h1>

				<div class="alert alert-warning">
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					<strong>Lỗi!</strong> Không tìm thấy trang
				</div>

			</h1>
			</div>
		);
	}
}

export default NotFoundPage;
