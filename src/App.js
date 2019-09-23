import React, { Component } from 'react';
// import './App.css';
import Hint from './components/Hint';
import InputNumber from './components/InputNumber';
import GuessTryNumber from './components/GuessTryNumber';
import GuessHistory from './components/GuessHistory';
import NewGame from './components/NewGame';
import Instructions from './components/Instructions';
import DebugDiv from './components/DebugDiv';

class App extends Component {
  state = {
    numberToGuess: '',
    currentGuessNumber: '',
    hintText: "I'll give you a hint",
    numberOfGuesses: 0,
    guessHistoryString: '',
    gameOver: false,
  };

  componentDidMount() {
    this.setState({
      numberToGuess: Math.floor(Math.random() * 100) + 1,
    });
  }

  resetGame = () => {
    this.setState({
      numberToGuess: Math.floor(Math.random() * 100) + 1,
      currentGuessNumber: '',
      hintText: "I'll give you a hint",
      numberOfGuesses: 0,
      guessHistoryString: '',
      gameOver: false,
    });
  };

  updateValue = (e) => {
    this.setState({
      currentGuessNumber: e.target.value,
    });
  };

  testNumber = () => {
    let hintText;
    const {
      currentGuessNumber,
      numberToGuess,
      numberOfGuesses,
      guessHistoryString,
      gameOver,
    } = this.state;
    const dif = Math.abs(currentGuessNumber - numberToGuess);
    switch (true) {
      case dif > 0 && dif <= 5:
        hintText = 'Almost got it!!!';
        break;
      case dif > 5 && dif <= 15:
        hintText = 'You are close!';
        break;
      case dif > 10:
        hintText = 'Far away...';
        break;
      default:
        hintText = 'CORRECT!!!';
    }

    this.setState({
      hintText,
      numberOfGuesses: numberOfGuesses + 1,
      guessHistoryString: `${guessHistoryString} ${currentGuessNumber}`,
      currentGuessNumber: '',
      gameOver: hintText === 'CORRECT!!!' ? true : false,
    });
    console.log(numberOfGuesses);
    console.log(gameOver);
  };

  handleInput = (e) => {
    const { currentGuessNumber } = this.state;
    e.preventDefault();
    console.log(`handleInput: ${currentGuessNumber} END`);
    this.testNumber();
  };

  render() {
    const {
      hintText,
      currentGuessNumber,
      numberOfGuesses,
      guessHistoryString,
      gameOver,
    } = this.state;
    return (
      <>
        <h1 style={{ color: 'white', marginTop: '40px' }}>Guess the number(1-100)!</h1>
        <DebugDiv numberToGuess={this.state.numberToGuess} />
        <Hint hintText={hintText} />
        <InputNumber
          currentGuessNumber={currentGuessNumber}
          gameOver={gameOver}
          updateValue={this.updateValue}
          testNumber={this.testNumber}
          handleInput={this.handleInput}
        />
        <GuessTryNumber numberOfGuesses={numberOfGuesses} />
        <GuessHistory guessHistoryString={guessHistoryString} />
        <NewGame resetGame={this.resetGame} />
        <Instructions />
      </>
    );
  }
}

export default App;
