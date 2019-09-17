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
    numberToGuess: 0,
    currentGuessNumber: 0,
  };

  componentDidMount() {
    this.setState({
      numberToGuess: 55,
    });
  }

  render() {
    return (
      <>
        <DebugDiv number={this.state.numberToGuess} />
        <Hint />
        <InputNumber />
        <GuessButton />
        <GuessTryNumber />
        <GuessHistory />
        <NewGame />
        <Instructions />
      </>
    );
  }
}

export default App;
