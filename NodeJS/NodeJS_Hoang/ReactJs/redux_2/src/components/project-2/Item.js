import React, { Component } from 'react';



class Item extends Component {

  
  onUpdateStt = () => {

      this.props.onUpdateStt(this.props.tasks.id);
  }

  onDelete = () => {
      this.props.onDelete(this.props.tasks.id); 
  }
  onUpdateContent = () => {
      this.props.onUpdateContent(this.props.tasks.id);
  }

  render() {
    var {tasks,index} = this.props;
    return (
        
        <tr>
            <td>{index}</td>
            <td>{tasks.name}</td>
            <td className="text-center">
                <span 
                className={(tasks.status)? "label label-success" : "label label-danger" }
                onClick={this.onUpdateStt}
                >
                    {(tasks.status)? "Kích hoạt" : "Ẩn" }      
                        </span>
            </td>
            <td className="text-center">
                <button 
                type="button" 
                className="btn btn-warning"
                onClick={this.onUpdateContent}
                >
                    <span className="fa fa-pencil "></span>&nbsp;Sửa
                </button>
                &nbsp;
                <button 
                type="button" 
                className="btn btn-danger"
                onClick={this.onDelete}
                >
                    <span className="fa fa-trash"
                    ></span>&nbsp;Xóa
                </button>
            </td>
        </tr>
      
    );
  }
}

export default Item;                             
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
