import React from 'react';
import './App.css';
import Hint from './components/Hint';
import InputNumber from './components/InputNumber';
import GuessButton from './components/GuessButton';
import GuessTryNumber from './components/GuessTryNumber';
import GuessHistory from './components/GuessHistory';
import NewGame from './components/NewGame';
import Instructions from './components/Instructions';

function App() {
  return (
    <>
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

export default App;
