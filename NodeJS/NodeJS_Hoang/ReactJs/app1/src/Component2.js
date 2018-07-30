import React  from 'react';
// import logo from './logo.svg';
// import './App.css';
/*
class Component2 extends React.Component {

  constructor(props) {
    super(props)
  }
  componentDidMount = async () =>  {
    console.log("componentDidMount");
  }

  shouldComponentUpdate = async (nextProps, nextState, nextContext) => {
    return true;
  }

  componentWillUnmount = async () => {
    console.log("componentWillUnmount");
  }

 componentDidCatch = async (error, errorInfo) => {
 }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Day la : {this.props.timesFromParent}</h1>
      </div>
    );
  }
}
*/
const Component2 = (props) => {
    return (
        <div>
          <h1>Day la : {props.timesFromParent}</h1>
        </div>
      );
}
export default Component2;