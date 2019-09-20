import React from 'react';
import PropTypes from 'prop-types';

const Hint = ({ hintText }) => {
  const styles = {
    // backgroundColor: 'blue',
    // color: 'yellow',
  };
  return (
    <div className="block btn btn-warning" style={styles}>
      {hintText}
    </div>
  );
};

Hint.propTypes = {
  hintText: PropTypes.string.isRequired,
};
export default Hint;
