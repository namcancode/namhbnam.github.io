import React, { Component } from 'react';
import TaskForm from './components/project-2/TaskForm';
import Control from './components/project-2/Control';
import Table from './components/project-2/Table';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks : [] ,
      isDisplayForm : false,
      taskEditing : null,
      filter : {
          name : "",
          status : -1
      },
      keyword : "",
      sort : {
          by: "name",
          value : 1
      }
      
    };
  }

  componentWillMount() {  // only called once
      if (localStorage && localStorage.getItem("tasks")) {
        var taskdata = JSON.parse(localStorage.getItem("tasks"));
        this.setState({
            tasks: taskdata
        });
      }
       var {tasks} = this.state;
       tasks.sort((a,b)=> { 
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
          }
        if (nameA > nameB) {
            return 1;
          }
        return 0;

       });

       
      
  }



  genkey() {
      return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
  };
  thekeys() {
      return this.genkey()+this.genkey()+"-"+this.genkey()+this.genkey()+this.genkey()+this.genkey()+"-"+this.genkey()+this.genkey();
  }

    
    onToggleForm = () => {
        if (this.state.isDisplayForm && this.state.taskEditing !== null) {
            this.setState({
                isDisplayForm : true,
                taskEditing : null
            });
        }else  {
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditing : null
            });
        }

    }
    
    onCloseForm = () => {
        this.setState({
            isDisplayForm : false
        });
    }
    onOpenForm = () => {
        this.setState({
            isDisplayForm : true
        });
    }

    onSubmit = (data) => {
        var {tasks} = this.state;
        if(data.id === '') {
            data.id = this.thekeys();
            tasks.push(data);
        }
        else {
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
        this.setState({
            
            isDisplayForm : false,
            taskEditing : null
        });
    }


    
    onUpdateStt = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        console.log(index);
        
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
         }
        
    }
    findIndex = (id) => {
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task,index) => {
            if (task.id === id) 
            {  
                result = index ;
                
            }
            });
        return result;
    }


    onDelete = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);

        this.onCloseForm();
        if (index !== -1) {
            tasks.splice(index,1);
            
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks',JSON.stringify(tasks));
         }
    }
    onUpdateContent = (id) => {
        
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        })

        
        this.onOpenForm();
    }

    onFilter =(filterName,filterStatus) => {
        this.setState({
            filter : {
                name: filterName.toLowerCase(),
                status: parseInt(filterStatus,10)
            }
        });
        
        
    }

    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        });
        
    }

    onSort = (sortBy,sortValue) => {
        
        this.setState({
            sort : {
                by: sortBy,
                value : sortValue
            }
        });
        
    }

//------------------------------------------------------------------------------------------


  render() {
    var {tasks,isDisplayForm,taskEditing,filter,keyword,sort} = this.state;
    console.log(sort);
    
    if (filter) {
        if(filter.name) {
           tasks = tasks.filter( (task) => { return task.name.toLowerCase().indexOf(filter.name) !== -1 });
        }
        
        tasks = tasks.filter( (task) => { 
            if (filter.status === -1) {
                return tasks;
            }
            else  {
                return task.status === (filter.status === 1? true : false);
            }
        } );
        
        
    }
    if (keyword) {
        tasks = tasks.filter( (task) => { return task.name.toLowerCase().indexOf(keyword) !== -1 });
    }
    
    if(sort.by==="name"  && sort.value===1) {
       tasks.sort((a,b)=> { 
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
          }
        if (nameA > nameB) {
            return 1;
          }
        return 0;

       });
    }

    if(sort.by==="name"  && sort.value===-1) {
        tasks.sort((a,b)=> { 
         var nameA = a.name.toUpperCase();
         var nameB = b.name.toUpperCase();
         if (nameA < nameB) {
             return 1;
           }
         if (nameA > nameB) {
             return -1;
           }
         return 0;
 
        });
     }
    
    if(sort.by==="status"  && sort.value===1) {
        tasks.sort((a,b)=> { 
            return b.status-a.status
        });
    }
    if(sort.by==="status"  && sort.value===-1) {
        tasks.sort((a,b)=> { 
            return a.status-b.status
        });
    }

    
    var isTaskForm = isDisplayForm? 
    <TaskForm 
    onSubmit = {this.onSubmit}    
    onCloseForm={this.onCloseForm} 
    task = {taskEditing}
    />
     : "";

    

    return (
      
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row ">
            <div className={isDisplayForm? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "" }>
                {isTaskForm}
            </div>
            <div className={isDisplayForm? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.onToggleForm}
                >
                    <span className="fa fa-plus"></span> Thêm Công Việc 
                </button>
                <hr />
                <Control onSearch = {this.onSearch} onSort = {this.onSort} />
                &nbsp;
                <Table onFilter = {this.onFilter} tasks={tasks} onUpdateStt={this.onUpdateStt} onDelete = {this.onDelete} onUpdateContent = {this.onUpdateContent} />
            </div>
        </div>
    </div>
      
    );
  }
}

export default App;
