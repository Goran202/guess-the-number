import React from 'react';

const GuessTryNumber = (props) => {
  const styles = {
    height: 40,
    width: 200,
    color: 'black',
  };
  return <div style={styles}>Number of guesses: {props.numberOfGuesses}</div>;
};

export default GuessTryNumber;
