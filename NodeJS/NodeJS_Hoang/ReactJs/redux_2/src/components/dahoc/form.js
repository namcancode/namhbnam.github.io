import React, { Component } from 'react';



import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",
      description: "",
      gender : 1,
      rdLang: "vi",
      checkBox: true

    };
  }
  handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type=== "checkbox" ? target.checked : target.value ;
    this.setState({
      [name]: value
    }); 
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {

    return (
      
      <div className="container">
        
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form in ReactJS</h3>
                </div>
                <div className="panel-body">
                  
                  
                  <form onSubmit={this.onSubmit} >
                  
                    <div className="form-group">
                      <label >Username: </label>
                      <input type="text" className="form-control" name="username" onChange={this.handleChange} value={this.state.username} />
                    </div>
                    <div className="form-group">
                      <label >Password: </label>
                      <input type="password" className="form-control" name="password" onChange={this.handleChange} value={this.state.password} />
                    </div>
                   
                    <div className="form-group">
                      <label >MO TA </label>
                      <textarea 
                        name="description"
                        onChange={this.handleChange} 
                        className="form-control" 
                        value={this.state.description}
                      ></textarea>
                    </div>

                    <label >Gioi Tinh </label>
                    <select name="gender"  className="form-control"  value={this.state.gender} onChange={this.handleChange}  >
                      
                      <option value={0}>Nam</option>
                      <option value={1} >Nu</option>
                    </select>
                    <br />

                    <label >Ngon Ngu</label>
                    <div className="radio">
                      <label>
                        <input type="radio" name ="rdLang" value="en" onChange={this.handleChange} checked={this.state.rdLang === "en"} />
                        Tieng Anh
                      </label>
                      <label>
                        <input type="radio" name ="rdLang" value="vi"  onChange={this.handleChange} checked={this.state.rdLang === "vi"} />
                        Tieng Viet
                      </label>
                    </div>

                    
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="checkBox" value={true} onChange={this.handleChange} checked={this.state.checkBox === true} />
                        Luu mat khau?
                      </label>
                    </div>
                    
                    
                    
                  
                    <button type="submit" className="btn btn-primary"  >Submit</button>
                    <button type="reset" className="btn btn-default">Delete</button>
                  </form>
                  

                </div>
            </div>
            
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default App;
