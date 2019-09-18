import React from 'react';

const DebugDiv = (props) => {
  const styles = {
    backgroundColor: 'green',
    color: 'black',
  };
  return (
    <div className="block" style={styles}>
      DebugDiv: {props.numberToGuess}
    </div>
  );
};

export default DebugDiv;
