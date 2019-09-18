import React from 'react';

const GuessHistory = (props) => {
  const styles = {
    backgroundColor: 'grey',
    color: 'black',
  };
  return (
    <div className="block" style={styles}>
      GuessHistory: {props.guessHistoryString}
    </div>
  );
};

export default GuessHistory;
