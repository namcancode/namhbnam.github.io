import React, { Component } from 'react';

class ColorPicker extends Component {

  constructor (props) {
    super(props);
    this.state = {
      colors : ["red","green","blue","gray"]
    }

  };
  
  showColor(color) {
    return { backgroundColor : color };
  }
  setActiveColor(color) {
    this.props.onRecieveColor(color)
  }

  render() {
    var elmcolors = this.state.colors.map((color,index) => {
      return <span
              key={index}
              style={this.showColor(color)}
              className = {this.props.colora === color ? 'isactive' : '' }
              onClick = {()=> this.setActiveColor(color)}
              ></span>
    });

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                  </div>
                  <div className="panel-body">
                    {elmcolors}
                  </div>
              </div>
              
          </div>
  
    );
  }
}

export default ColorPicker;
