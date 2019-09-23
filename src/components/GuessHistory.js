import React from 'react';
import PropTypes from 'prop-types';

const GuessHistory = ({ guessHistoryString }) => {
  const styles = {
    backgroundColor: '#6c757d',
    color: 'white',
    whiteSpace: 'nowrap',
  };
  return (
    <div className="block notbtn" style={styles}>
      Guesses:
      {guessHistoryString}
    </div>
  );
};

GuessHistory.propTypes = {
  guessHistoryString: PropTypes.string.isRequired,
};

export default GuessHistory;
