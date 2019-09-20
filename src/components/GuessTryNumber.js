import React from 'react';
import PropTypes from 'prop-types';

const GuessTryNumber = ({ numberOfGuesses }) => {
  const styles = {
    // color: 'white',
  };
  return (
    <div className="block btn btn-danger" style={styles}>
      Number of guesses: {numberOfGuesses}
    </div>
  );
};

GuessTryNumber.propTypes = {
  numberOfGuesses: PropTypes.number.isRequired,
};
export default GuessTryNumber;
