import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Card from "./components/Card"; 
import Cards from "./Cards.json";
import Footer from "./components/Footer";


function shuffleCards(array) {
  for (let i= array.length -1; i>0; i--){
    let j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    Cards,
    currentScore: 0,
    topScore: 0,
    rightWrong: "Click on Image to Begin !",
    clicked: [],
  };

  handleClick = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ 
        clicked: this.state.clicked.concat(id)
      })
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore +1;
    this.setState({
      currentScore:newScore,
      rightWrong: "You Guessed Correctly"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore});
    }
    else if (newScore === 12) {
      this.state({ rightWrong : "You win!"});
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong:"You Guessed Wrong Try Again !",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(Cards);
    this.setState({ Cards: shuffledCards});
  };

  render () {
    return(

      <Router>
        <div>
        <Navbar 
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.Cards.map(card => (
             <Card 
             key={card.id}
             handleClick={this.handleClick}
             handleIncrement={this.handleIncrement}
             handleReset={this.handleReset}
             handleShuffle={this.handleShuffle}
             id={card.id}
             image={card.image}
              />
          ))}
        </Wrapper>
        <Footer />
        </div>
      
      </Router>
    )
  }

}


export default App;
