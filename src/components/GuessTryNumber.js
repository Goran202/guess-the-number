import React from 'react';
import PropTypes from 'prop-types';

const GuessTryNumber = ({ numberOfGuesses }) => {
  const styles = {
    color: 'white',
    backgroundColor: '#dc3545',
  };
  return (
    <div className="block notbtn" style={styles}>
      Number of guesses: {numberOfGuesses}
    </div>
  );
};

GuessTryNumber.propTypes = {
  numberOfGuesses: PropTypes.number.isRequired,
};
export default GuessTryNumber;
