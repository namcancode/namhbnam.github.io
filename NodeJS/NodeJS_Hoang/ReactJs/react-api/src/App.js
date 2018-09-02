import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<button
								type="button"
								className="btn btn-default mb-5"
							>
								Thêm sản phẩm
							</button>

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h3 className="panel-title">
										Danh sách sản phẩm
									</h3>
								</div>
								<div className="panel-body">
									<table className="table table-bordered table-hover">
										<thead>
											<tr>
												<th>STT</th>
												<th>Mã</th>
												<th>Tên</th>
												<th>Giá</th>
												<th>Trạng Thái</th>
												<th>Hành Động</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>1</td>
												<td>Iphone 6 Plus</td>
												<td>500</td>
												<td>
													<span className="label label-warning">
														Còn Hàng
													</span>
												</td>
												<td>
													<button
														type="button"
														className="btn btn-success"
													>
														Sủa
													</button>
													<button
														type="button"
														className="btn btn-danger"
													>
														Xóa
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
