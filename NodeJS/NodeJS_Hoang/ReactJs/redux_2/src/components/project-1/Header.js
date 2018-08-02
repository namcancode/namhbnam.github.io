import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
        
        <nav className="navbar navbar-inverse">
            <a className="navbar-brand" >Title</a>
            <ul className="nav navbar-nav">
                <li className="active">
                    <a>Home</a>
                </li>
                <li>
                    <a>Link</a>
                </li>
            </ul>
        </nav>
        
    );
  }
}

export default Header;