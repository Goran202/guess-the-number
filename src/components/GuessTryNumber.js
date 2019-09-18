import React from 'react';

const GuessTryNumber = (props) => {
  const styles = {};
  return (
    <div className="block" style={styles}>
      Number of guesses: {props.numberOfGuesses}
    </div>
  );
};

export default GuessTryNumber;
