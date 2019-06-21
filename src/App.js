//imports dependencies and files
import React, { Component } from "react";
import $ from 'jquery';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
// import (jquery)

import "./App.css";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const bootstrap = require('bootstrap');
console.log(bootstrap)


class App extends Component {
  state = {
    charList: characters,
    clickedChar: [],
    score: 0,
    highScore: 0
  };

  imageClick = event => {
    var currentHighScore = this.state.highScore;
    console.log(event.target.alt);
    const currentCharacter = event.target.alt;
    const charAlreadyClicked =
      this.state.clickedChar.indexOf(currentCharacter) > -1;

    if (charAlreadyClicked) {
      var newHighScore = this.state.score;

       $('#youLose').modal('show');
       if (newHighScore >= currentHighScore){
         this.setState({
          highScore: newHighScore
         })
       };
      this.setState({
        charList: this.state.charList.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedChar: [],
        score: 0,
        
      });
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
            $('#youWon').modal('show');
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
          highScore={this.state.highScore}
        />
                  <Header />
        {/* <div className="cont m-0 bg"> */}
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
        {/* </div> */}
      </div>
    );
  }
}
export default App;