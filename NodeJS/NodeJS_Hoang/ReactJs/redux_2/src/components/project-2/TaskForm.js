import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			status: false
		};
	}
	componentWillMount() {
		if (this.props.itemEditing && this.props.itemEditing.id !== null) {
			this.setState({
				id: this.props.itemEditing.id,
				name: this.props.itemEditing.name,
				status: this.props.itemEditing.status
			});
		} else this.onClear();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.itemEditing) {
			this.setState({
				id: nextProps.itemEditing.id,
				name: nextProps.itemEditing.name,
				status: nextProps.itemEditing.status
			});
		} else {
			this.onClear();
		}
	}

	onCloseForm = () => {
		this.props.onCloseForm();
		this.onClear();
	};

	onChange = event => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		if (name === "status") {
			value = target.value === "true" ? true : false;
		}
		this.setState({
			[name]: value
		});
	};

	onSave = event => {
		event.preventDefault();
		this.props.onSaveTask(this.state);
		this.onClear();
		this.onCloseForm();
	};

	onClear = () => {
		this.setState({
			name: "",
			status: false
		});
	};

	render() {
		if (!this.props.isDisplayForm) return null
		return (
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title col-lg-11 ">
						{this.state.id !== ""
							? "Cập nhật công việc"
							: "Thêm công việc"}
					</h3>
					<span
						role="button"
						className="fa fa-times-circle text-right "
						onClick={this.onCloseForm}
					/>
				</div>
				<div className="panel-body">
					<form onSubmit={this.onSave}>
						<div className="form-group">
							<label>Tên :</label>
							<input
								type="text"
								className="form-control"
								name="name"
								value={this.state.name}
								onChange={this.onChange}
							/>
						</div>
						<label>Trạng Thái :</label>
						<select
							className="form-control"
							required="required"
							name="status"
							value={this.state.status}
							onChange={this.onChange}
						>
							<option value={false}>Ẩn</option>
							<option value={true}>Kích Hoạt</option>
						</select>
						<br />
						<div className="text-center">
							<button type="submit" className="btn btn-warning">
								<span className="fa fa-plus mr-5" /> Lưu Lại
							</button>&nbsp;
							<button
								type="button"
								onClick={this.onClear}
								className="btn btn-danger"
							>
								<span className="fa fa-close mr-5" />Hủy Bỏ
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isDisplayForm: state.isDisplayForm,
		itemEditing: state.itemEditing
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onSaveTask: task => {
			dispatch(actions.saveTask(task));
		},
		onCloseForm: () => {
			dispatch(actions.closeForm());
		},
		onOpenForm: () => {
			dispatch(actions.openForm());
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskForm);
