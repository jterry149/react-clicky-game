// Required imports for application
import React, { Component } from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import cards from "./cards.json";
import './App.css';

class App extends Component {
  
  
  
  
  // Counts the clicks and tracks the score of the game by card objects ide
  clickCount = id => 
  {
    
  }
  // Map and render a cards components for each card object
  render() 
  {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
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
