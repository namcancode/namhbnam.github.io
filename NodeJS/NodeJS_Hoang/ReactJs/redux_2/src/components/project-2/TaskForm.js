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
		if (this.props.task) {
			console.log(this.props.task);

			this.setState({
				id: this.props.task.id,
				name: this.props.task.name,
				status: this.props.task.status
			});
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.task) {
			this.setState({
				id: nextProps.task.id,
				name: nextProps.task.name,
				status: nextProps.task.status
			});
		} else if (!nextProps.task) {
			this.setState({
				id: "",
				name: "",
				status: false
			});
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

	onSubmit = event => {
		event.preventDefault();
		// this.props.onSubmit(this.state);
		this.props.onAddTask(this.state);
		this.onClear();
		this.onCloseForm();
	};

	onClear = () => {
		this.setState({
			id: "",
			name: "",
			status: false
		});
	};

	render() {
		var { id } = this.state;
		if (!this.props.isDisplayForm) return "";
		return (
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title col-lg-11 ">
						{id !== "" ? "Cập nhật công việc" : "Thêm công việc"}
					</h3>
					<span
						role="button"
						className="fa fa-times-circle text-right "
						onClick={this.onCloseForm}
					/>
				</div>
				<div className="panel-body">
					<form onSubmit={this.onSubmit}>
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
								Thêm
							</button>&nbsp;
							<button
								type="reset"
								className="btn btn-danger"
								onClick={this.onClear}
							>
								Hủy Bỏ
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
		isDisplayForm: state.isDisplayForm
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddTask: task => {
			dispatch(actions.addTask(task));
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
