import React, { Component } from "react";
import callApit from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import callApi from "../../utils/apiCaller";
class ProductActionPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			txtName: "",
			txtPrice: "",
			chkbStatus: ""
		};
	}

		componentDidMount(){
			const {match} = this.props;
			if (match){
				const id = match.params.id;
				callApi(`products/${id}`, "GET", null).then(res =>{
					const data = res.data
					this.setState({
						id: data.id,
						txtName: data.name,
						txtPrice: data.price,
						chkbStatus: data.status
					})
				})
			}
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
	onSave = e => {
		e.preventDefault();
		const { id,txtName, txtPrice, chkbStatus } = this.state;
		const { history } = this.props;
		if(id){
			callApit(`products/${id}`, "PUT", {
				name: txtName,
				price: txtPrice,
				status: chkbStatus
			}).then(res => {
				history.goBack();
				// history.push("/")
			});
		}else{
			callApit("products", "POST", {
				name: txtName,
				price: txtPrice,
				status: chkbStatus
			}).then(res => {
				history.goBack();
				// history.push("/")
			});
		}

	};
	render() {
		const { txtName, txtPrice, chkbStatus } = this.state;
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form onSubmit={this.onSave}>
					<div className="form-group">
						<label>Tên sản phẩm: </label>
						<input
							type="text"
							className="form-control"
							name="txtName"
							value={txtName}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Giá: </label>
						<input
							type="number"
							className="form-control"
							name="txtPrice"
							value={txtPrice}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Trạng Thái: </label>
					</div>

					<div className="checkbox">
						<label>
							<input
								type="checkbox"
								name="chkbStatus"
								value={chkbStatus}
								onChange={this.onChange}
								checked = {chkbStatus}
							/>
							Còn Hàng
						</label>
					</div>
					<Link to="/product-list" className="btn btn-danger">
						Hủy
					</Link>
					<button type="submit" className="btn btn-primary">
						Lưu lại
					</button>

				</form>
			</div>
		);
	}
}

export default ProductActionPage;
