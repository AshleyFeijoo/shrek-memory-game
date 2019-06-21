//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Notification from "./components/Notification"
import { Route, Redirect } from 'react-router'
// import (jquery)

import "./App.css";


class App extends Component {
  state = {
    charList: characters,
    clickedChar: [],
    score: 0
  };

  imageClick = event => {
    const currentCharacter = event.target.alt;
    const charAlreadyClicked =
      this.state.clickedChar.indexOf(currentCharacter) > -1;

    if (charAlreadyClicked) {
      this.setState({
        charList: this.state.charList.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedChar: [],
        score: 0
      });
        alert("you SUCK!");
    } else {
      this.setState(
        {
          charList: this.state.charList.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChar: this.state.clickedChar.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
    
        () => {
          if (this.state.score === 12) {
            alert("You have WON IT.");
            // $('#myModal').modal('show');

            this.setState({
              charList: this.state.charList.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedChar: [],
              score: 0
            });
          }
        }
      );
    }
  };
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
                  <Header />

        <div class="cont m-0 bg">
          <div className="container h-100">
            <div className="wrapper row flex-row justify-content-center m-5">
              {this.state.charList.map(charList => (
                <CharacterCard
                  imageClick={this.imageClick}
                  id={charList.id}
                  key={charList.id}
                  image={charList.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;