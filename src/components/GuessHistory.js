import React from 'react';

const GuessHistory = (props) => {
  const styles = {
    // backgroundColor: 'grey',
    // color: 'black',
    whiteSpace: 'nowrap',
  };
  return (
    <div className="block btn btn-secondary" style={styles}>
      Guesses: {props.guessHistoryString}
    </div>
  );
};

export default GuessHistory;
