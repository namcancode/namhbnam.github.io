import React, { Component } from 'react';
import Item from './Item';


class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName : '',
      filterStatus: -1 // tat ca -1 an 0 kich hoat 1
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter( name==="filterName" ? value : this.state.filterName , name==="filterStatus" ? value : this.state.filterStatus  );
    this.setState({
        [name] : value
    });
  }
  

  render() {
    var {tasks} = this.props;
    var {filterName,filterStatus} = this.state;
    var elmtask = tasks.map( (task,index) => {
    
        return <Item key ={task.id} index={index} tasks={task} onUpdateStt={this.props.onUpdateStt} onDelete = {this.props.onDelete} onUpdateContent = {this.props.onUpdateContent} />
    } );
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
                                        <input name="filterName" value = {filterName} onChange = {this.onChange} type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <select name="filterStatus" value = {filterStatus} onChange = {this.onChange} className="form-control">
                                            <option value={-1}>Tất Cả</option>
                                            <option value={0}>Ẩn</option>
                                            <option value={1}>Kích Hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                {elmtask}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            
      
    );
  }
}

export default Table;