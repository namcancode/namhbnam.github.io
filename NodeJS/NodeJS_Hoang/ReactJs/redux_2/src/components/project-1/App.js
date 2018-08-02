import React, { Component } from 'react';

import ColorPicker from "./components/ColorPicker"
import Size from "./components/Size"
import Result from "./components/Result"
import Reset from "./components/Reset"

import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      colors : "red",
      fontSize : 15
    };
    this.onSetColor = this.onSetColor.bind(this);
  };
  onSetColor(params) {
    this.setState({
      colors : params
    });
    
  }
  changeSize = (value) => {
   /* if(this.state.fontSize+value >=8 && this.state.fontSize+value <=36)
    this.setState({
      fontSize : this.state.fontSize + value 
    }); */
    this.setState({
      fontSize : ( (this.state.fontSize + value) >=8 && (this.state.fontSize + value) <=36 ) ? (this.state.fontSize + value) : this.state.fontSize
    });
  }
  resetAll = (b) => {
    if (b) {
    this.setState({
      colors : "red",
      fontSize : 15
    }) ;
  }
  }

  render() {

    return (
      <div className="container mt-50">
        <hr/>
        <div className="row">
          <ColorPicker colora={this.state.colors} onRecieveColor={this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Size onChangeSize = {this.changeSize} fontsizea = {this.state.fontSize} />
              <Reset reset={this.resetAll} />
          </div>
          <Result color = {this.state.colors} fontsizea = {this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
