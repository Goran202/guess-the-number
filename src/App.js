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

class App extends Component {
  state = {
    numberToGuess: '',
    currentNumber: '',
    currentGuessNumber: '',
    hintText: '',
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
      hintText: '',
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
    Math.abs(this.state.currentGuessNumber - this.state.numberToGuess) < 10
      ? (hintText = 'Blizu si')
      : (hintText = 'Daleko si');
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
        <DebugDiv numberToGuess={this.state.numberToGuess} />
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
