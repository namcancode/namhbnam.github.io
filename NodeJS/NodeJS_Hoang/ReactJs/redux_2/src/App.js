import React, { Component } from "react";
import TaskForm from "./components/project-2/TaskForm";
import Control from "./components/project-2/Control";
import Table from "./components/project-2/Table";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./actions/index";
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// tasks: [],
			// isDisplayForm: false,
			taskEditing: null,
			filter: {
				name: "",
				status: -1
			},
			keyword: "",
			sort: {
				by: "name",
				value: 1
			}
		};
	}

	componentWillMount() {
		// only called once
		// if (localStorage && localStorage.getItem("tasks")) {
		// 	var taskdata = JSON.parse(localStorage.getItem("tasks"));
		// 	this.setState({
		// 		tasks: taskdata
		// 	});
		// }
		// var { tasks } = this.state;
		// tasks.sort((a, b) => {
		// 	var nameA = a.name.toUpperCase();
		// 	var nameB = b.name.toUpperCase();
		// 	if (nameA < nameB) {
		// 		return -1;
		// 	}
		// 	if (nameA > nameB) {
		// 		return 1;
		// 	}
		// 	return 0;
		// });
	}

	onToggleForm = () => {
		// if (this.state.isDisplayForm && this.state.taskEditing !== null) {
		// 	this.setState({
		// 		isDisplayForm: true,
		// 		taskEditing: null
		// 	});
		// } else {
		// 	this.setState({
		// 		isDisplayForm: !this.state.isDisplayForm,
		// 		taskEditing: null
		// 	});
		// }
		this.props.onToggleForm();
	};

	// onDelete = id => {
	// 	var { tasks } = this.state;
	// 	var index = this.findIndex(id);

	// 	this.onCloseForm();
	// 	if (index !== -1) {
	// 		tasks.splice(index, 1);

	// 		this.setState({
	// 			tasks: tasks
	// 		});
	// 		localStorage.setItem("tasks", JSON.stringify(tasks));
	// 	}
	// };
	onUpdateContent = id => {
		var { tasks } = this.state;
		var index = this.findIndex(id);
		var taskEditing = tasks[index];
		this.setState({
			taskEditing: taskEditing
		});

		this.onOpenForm();
	};

	onFilter = (filterName, filterStatus) => {
		this.setState({
			filter: {
				name: filterName.toLowerCase(),
				status: parseInt(filterStatus, 10)
			}
		});
	};

	onSearch = keyword => {
		this.setState({
			keyword: keyword
		});
	};

	onSort = (sortBy, sortValue) => {
		this.setState({
			sort: {
				by: sortBy,
				value: sortValue
			}
		});
	};

	//------------------------------------------------------------------------------------------

	render() {
		var {
			// tasks,
			// isDisplayForm,
			taskEditing
			// filter,
			// keyword,
			// sort
		} = this.state;
		const { isDisplayForm } = this.props;
		// console.log(sort);

		// if (filter) {
		// 	if (filter.name) {
		// 		tasks = tasks.filter(task => {
		// 			return task.name.toLowerCase().indexOf(filter.name) !== -1;
		// 		});
		// 	}

		// tasks = tasks.filter(task => {
		// 	if (filter.status === -1) {
		// 		return tasks;
		// 	} else {
		// 		return task.status === (filter.status === 1 ? true : false);
		// 	}
		// });
		// }
		// if (keyword) {
		// 	tasks = tasks.filter(task => {
		// 		return task.name.toLowerCase().indexOf(keyword) !== -1;
		// 	});
		// }

		// if (sort.by === "name" && sort.value === 1) {
		// tasks.sort((a, b) => {
		// 	var nameA = a.name.toUpperCase();
		// 	var nameB = b.name.toUpperCase();
		// 	if (nameA < nameB) {
		// 		return -1;
		// 	}
		// 	if (nameA > nameB) {
		// 		return 1;
		// 	}
		// 	return 0;
		// });
		// }

		// if (sort.by === "name" && sort.value === -1) {
		// 	tasks.sort((a, b) => {
		// 		var nameA = a.name.toUpperCase();
		// 		var nameB = b.name.toUpperCase();
		// 		if (nameA < nameB) {
		// 			return 1;
		// 		}
		// 		if (nameA > nameB) {
		// 			return -1;
		// 		}
		// 		return 0;
		// 	});
		// }

		// if (sort.by === "status" && sort.value === 1) {
		// 	tasks.sort((a, b) => {
		// 		return b.status - a.status;
		// 	});
		// }
		// if (sort.by === "status" && sort.value === -1) {
		// 	tasks.sort((a, b) => {
		// 		return a.status - b.status;
		// 	});
		// }

		// var isTaskForm = isDisplayForm ? <TaskForm task={taskEditing} /> : "";

		return (
			<div className="container">
				<div className="text-center">
					<h1>Quản Lý Công Việc</h1>
					<hr />
				</div>
				<div className="row ">
					<div
						className={
							isDisplayForm
								? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
								: ""
						}
					>
						 <TaskForm itemEditting={taskEditing} />
					</div>
					<div
						className={
							isDisplayForm
								? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
								: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
						}
					>
						<button
							type="button"
							className="btn btn-primary"
							onClick={this.onToggleForm}
						>
							<span className="fa fa-plus" /> Thêm Công Việc
						</button>
						<hr />
						<Control
							onSearch={this.onSearch}
							onSort={this.onSort}
						/>
						&nbsp;
						<Table
							onFilter={this.onFilter}
							// tasks={tasks}
							// onUpdateStt={this.onUpdateStt}
							onDelete={this.onDelete}
							onUpdateContent={this.onUpdateContent}
						/>
					</div>
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
		onToggleForm: () => {
			dispatch(actions.toggleForm());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
