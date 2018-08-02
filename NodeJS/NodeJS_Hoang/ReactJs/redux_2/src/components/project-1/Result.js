import React, { Component } from 'react';

class Result extends Component {

  
  setStyle() {
    return  {
      color : this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontsizea
    } ;
  };


  render() {

    return (
      
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            
        <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Color : {this.props.color} --- Font-size : {this.props.fontsizea}px</h3>
            </div>
            <div className="panel-body">
              <div id="content" style={this.setStyle()}>
                Noi dung setting
              </div>
            </div>
        </div>
        
    </div>
      
    );
  }
}

export default Result;
