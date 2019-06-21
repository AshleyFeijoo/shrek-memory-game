//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar row fixed-top">

          <div className=" col-md-6">	<img src={ require('../../images/shrekHeader.png') } alt="shrek-pic" border="0" className="desc"/></div>
          <div class="col-md-6 text-center mx-auto">
          <li className="col-md-6 text-right">Score {this.props.score}</li>
          <li className="col-md-6 text-right">High Score {this.props.highScore}</li>
          </div>

      </nav>
    );
  }
}

export default Navbar;
