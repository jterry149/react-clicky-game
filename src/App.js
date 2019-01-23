// Required imports for application
import React, { Component } from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
//import Navbar from "./components/Navbar";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  // Setting the this.cards.state according to the cards json objects in the application
  state = {
    cards,
    score: 0,
    highscore: 0,
  };

  // Establishes the rules for when the game is over and alerts the user
  gameOver = () => 
  {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    })
    alert('Game Over : ( \nscore: ' + this.state.score);
    this.setState({score: 0});
    return true;
  }

  // Counts the clicks and tracks the score of the game by card objects id
  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } 
        else {
          this.gameOver();
        }
      }
      return false;
    });
  }

  // Map and render a cards components for each card object
  render() 
  {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Lego Movie Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card 
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

// Export the App
export default App;
