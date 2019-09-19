import React from 'react';

const GuessTryNumber = (props) => {
  const styles = {
    // color: 'white',
  };
  return (
    <div className="block btn btn-danger" style={styles}>
      Number of guesses: {props.numberOfGuesses}
    </div>
  );
};

export default GuessTryNumber;
