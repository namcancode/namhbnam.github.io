import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
class Item extends Component {
	onUpdateStt = () => {
		this.props.onUpdateStt(this.props.tasks.id);
	};

	onDelete = () => {
		this.props.onDelete(this.props.tasks.id);
	};
	onUpdateContent = () => {
		this.props.onOpenForm();
		this.props.onEditTask(this.props.tasks);
	};

	render() {
		var { tasks, index } = this.props;
		return (
			<tr>
				<td>{index}</td>
				<td>{tasks.name}</td>
				<td className="text-center">
					<span
						className={
							tasks.status
								? "label label-success"
								: "label label-danger"
						}
						onClick={this.onUpdateStt}
					>
						{tasks.status ? "Kích hoạt" : "Ẩn"}
					</span>
				</td>
				<td className="text-center">
					<button
						type="button"
						className="btn btn-warning"
						onClick={this.onUpdateContent}
					>
						<span className="fa fa-pencil " />&nbsp;Sửa
					</button>
					&nbsp;
					<button
						type="button"
						className="btn btn-danger"
						onClick={this.onDelete}
					>
						<span className="fa fa-trash" />&nbsp;Xóa
					</button>
				</td>
			</tr>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onUpdateStt: id => {
			dispatch(actions.updateStatus(id));
		},
		onDelete: id => {
			dispatch(actions.deleteTask(id));
		},
		onCloseForm: () => {
			dispatch(actions.closeForm());
		},
		onOpenForm: () => {
			dispatch(actions.openForm());
		},
		onEditTask : (task) =>{
			dispatch(actions.editTask(task))
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Item);
