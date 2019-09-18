import React from 'react';

const GuessHistory = (props) => {
  const styles = {
    height: 40,
    width: 200,
    margin: 'auto',
    backgroundColor: 'grey',
    color: 'black',
  };
  return <div style={styles}>GuessHistory: {props.guessHistoryString}</div>;
};

export default GuessHistory;
