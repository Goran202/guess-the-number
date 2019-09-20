import React from 'react';
import PropTypes from 'prop-types';

const DebugDiv = ({ numberToGuess }) => {
  const styles = {
    backgroundColor: 'green',
    color: 'black',
  };
  return (
    <div className="block btn" style={styles}>
      DebugDiv:
      {numberToGuess}
    </div>
  );
};

DebugDiv.propTypes = {
  numberToGuess: PropTypes.number.isRequired,
};

export default DebugDiv;
