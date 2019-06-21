//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar row fixed-top">

          <div className="itemLeft col-md-6">	<img src={ require('../../images/shrekHeader.png') } alt="shrek-pic" border="0" className="desc"/></div>
          <li className="itemRight col-md-6">Score: {this.props.score}</li>
      </nav>
    );
  }
}

export default Navbar;
