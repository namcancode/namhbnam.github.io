import React, { Component } from 'react';


class Reset extends Component {

  constructor (props) {
    super(props);
    this.resetall = this.resetall.bind(this);

  };
  resetall(b) {
    this.props.reset(b);
  }

  render() {

    return (
        <button type="button" className="btn btn-primary btnmar"
        onClick={() =>this.resetall(true)}

        >Reset</button>
     
    );
  }
}

export default Reset;
