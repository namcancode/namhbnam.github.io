import React, { Component } from 'react';

class Size extends Component {

 


  render() {

    return (

        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Font-size : {this.props.fontsizea}px </h3>
            </div>
            <div className="panel-body">
                <button type="button" className="btn btn-success btnmar" onClick={() =>this.props.onChangeSize(-1) } >Giam</button>
                <button type="button" className="btn btn-success btnmar" onClick={() =>this.props.onChangeSize(1) }>Tang</button>
            </div>
        </div>

    );
  }
}

export default Size;
