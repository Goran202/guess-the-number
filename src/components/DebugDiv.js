import React from 'react';
import PropTypes from 'prop-types';

const DebugDiv = ({ numberToGuess }) => {
  const styles = {
    backgroundColor: 'green',
    color: 'white',
  };
  return (
    <div className="block notbtn" style={styles}>
      DebugDiv:
      {numberToGuess}
    </div>
  );
};

DebugDiv.propTypes = {
  numberToGuess: PropTypes.number.isRequired,
};

export default DebugDiv;
