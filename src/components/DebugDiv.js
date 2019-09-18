import React from 'react';

const DebugDiv = (props) => {
  const styles = {
    height: 40,
    width: 200,
    marginTop: 20,
    backgroundColor: 'green',
    color: 'black',
  };
  return <div style={styles}>DebugDiv: {props.numberToGuess}</div>;
};

export default DebugDiv;
