import React from 'react';

const Hint = (props) => {
  const styles = {
    height: 40,
    width: 200,
    margin: 'auto',
    backgroundColor: 'blue',
    color: 'yellow',
  };
  return <div style={styles}>{props.hintText}</div>;
};

export default Hint;
