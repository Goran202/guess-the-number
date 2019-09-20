import React from 'react';
import PropTypes from 'prop-types';

const GuessHistory = ({ guessHistoryString }) => {
  const styles = {
    // backgroundColor: 'grey',
    // color: 'black',
    whiteSpace: 'nowrap',
  };
  return (
    <div className="block btn btn-secondary" style={styles}>
      Guesses:
      {guessHistoryString}
    </div>
  );
};

GuessHistory.propTypes = {
  guessHistoryString: PropTypes.string.isRequired,
};

export default GuessHistory;
