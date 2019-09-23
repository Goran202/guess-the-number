import React from 'react';
import PropTypes from 'prop-types';

const Hint = ({ hintText }) => {
  const styles = {
    backgroundColor: '#ffc107',
    color: 'white',
  };
  return (
    <div className="block notbtn" style={styles}>
      {hintText}
    </div>
  );
};

Hint.propTypes = {
  hintText: PropTypes.string.isRequired,
};
export default Hint;
