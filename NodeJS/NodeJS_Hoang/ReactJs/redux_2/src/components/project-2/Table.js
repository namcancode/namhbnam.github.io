import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterName: "",
			filterStatus: -1 // tat ca -1 an 0 kich hoat 1
		};
	}

	onChange = event => {
		var target = event.target;
		var name = event.target.name;
		var value =
			event.target.type === "checkbox" ? target.checked : target.value;
		const filter = {
			name: name === "filterName" ? value : this.state.filterName,
			status: name === "filterStatus" ? value : this.state.filterStatus
		};
		this.props.onFilterTable(filter);
		this.setState({
			[name]: value
		});
	};

	render() {
		var { tasks, filterTable, keyword,sort } = this.props;
		tasks = tasks.filter(task => {
			return task.name.toLowerCase().indexOf(keyword) !== -1;
		});
		if (filterTable.name) {
			tasks = tasks.filter(task => {
				return (
					task.name
						.toLowerCase()
						.indexOf(filterTable.name.toLowerCase()) !== -1
				);
			});
		}

		tasks = tasks.filter(task => {
			if (filterTable.status === -1) {
				return task;
			} else {
				return (
					task.status === (filterTable.status === 1 ? true : false)
				);
			}
		});

		if(sort.by === 'name'){
            tasks.sort((a, b) => {
                if(a.name > b.name) return sort.value;
                else if(a.name < b.name) return -sort.value;
                else return 0;
            });
        }else{
            tasks.sort((a, b) => {
                if(a.status > b.status) return -sort.value;
                else if(a.status < b.status) return sort.value;
                else return 0;
            });
}

		var elmtask = tasks.map((task, index) => {
			return <Item key={task.id} index={index} tasks={task} />;
		});



		return (
			<div className="row mt-15">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<table className="table table-bordered table-hover">
						<thead>
							<tr>
								<th className="text-center">STT</th>
								<th className="text-center">Tên</th>
								<th className="text-center">Trạng Thái</th>
								<th className="text-center">Hành Động</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>0</td>
								<td>
									<input
										name="filterName"
										value={this.state.filterName}
										onChange={this.onChange}
										type="text"
										className="form-control"
									/>
								</td>
								<td>
									<select
										name="filterStatus"
										value={this.state.filterStatus}
										onChange={this.onChange}
										className="form-control"
									>
										<option value={-1}>Tất Cả</option>
										<option value={0}>Ẩn</option>
										<option value={1}>Kích Hoạt</option>
									</select>
								</td>
								<td />
							</tr>
							{elmtask}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.tasks,
		filterTable: state.filterTable,
		keyword: state.search,
		sort:state.sort
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onFilterTable: filter => {
			dispatch(actions.filterTask(filter));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Table);
