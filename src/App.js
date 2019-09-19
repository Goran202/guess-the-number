import React, { Component } from 'react';
import './App.css';
import Hint from './components/Hint';
import InputNumber from './components/InputNumber';
import GuessButton from './components/GuessButton';
import GuessTryNumber from './components/GuessTryNumber';
import GuessHistory from './components/GuessHistory';
import NewGame from './components/NewGame';
import Instructions from './components/Instructions';
import DebugDiv from './components/DebugDiv';
import './components/style.css';

class App extends Component {
  state = {
    numberToGuess: '',
    currentNumber: '',
    currentGuessNumber: '',
    hintText: "I'll give you a hint",
    numberOfGuesses: 0,
    guessHistoryString: '',
  };

  componentDidMount() {
    this.setState({
      numberToGuess: Math.floor(Math.random() * 100) + 1,
    });
  }

  resetGame = () => {
    this.setState({
      numberToGuess: Math.floor(Math.random() * 100) + 1,
      currentNumber: '',
      currentGuessNumber: '',
      hintText: "I'll give you a hint",
      numberOfGuesses: 0,
      guessHistoryString: '',
    });
  };

  updateValue = (e) => {
    this.setState({
      currentGuessNumber: e.target.value,
    });
  };

  testNumber = () => {
    let hintText;
    const dif = Math.abs(this.state.currentGuessNumber - this.state.numberToGuess);
    switch (true) {
      case dif <= 10 && dif > 0:
        hintText = 'You are close!!!';
        break;
      case dif > 10:
        hintText = 'Far away...';
        break;
      default:
        hintText = 'CORRECT!!!';
    }

    // Math.abs(this.state.currentGuessNumber - this.state.numberToGuess) < 10
    //   ? (hintText = 'You are close!!!')
    //   : (hintText = 'Far away...');
    this.setState({
      hintText: hintText,
      numberOfGuesses: this.state.numberOfGuesses + 1,
      guessHistoryString:
        this.state.guessHistoryString + ' ' + this.state.currentGuessNumber,
    });
    console.log(this.state.numberOfGuesses);
  };

  handleInput = (e) => {
    e.preventDefault();
    console.log('handleInput: ' + this.state.currentGuessNumber + ' END');
    this.testNumber();
  };

  render() {
    return (
      <>
        <h1 style={{ color: 'white', marginTop: '40px' }}>Guess the number(1-100)!</h1>
        {/* <DebugDiv numberToGuess={this.state.numberToGuess} /> */}
        <Hint hintText={this.state.hintText} />
        <InputNumber
          currentGuessNumber={this.state.currentGuessNumber}
          updateValue={this.updateValue}
          testNumber={this.testNumber}
          handleInput={this.handleInput}
        />
        {/* <GuessButton /> */}
        <GuessTryNumber numberOfGuesses={this.state.numberOfGuesses} />
        <GuessHistory guessHistoryString={this.state.guessHistoryString} />
        <NewGame resetGame={this.resetGame} />
        <Instructions />
      </>
    );
  }
}

export default App;
