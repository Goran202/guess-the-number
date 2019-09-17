import React from 'react';

const DebugDiv = (props) => {
  const styles = {
    height: 40,
    width: 200,
    margin: 'auto',
    backgroundColor: 'green',
    color: 'black',
  };
  return <div style={styles}>DebugDiv: {props.number}</div>;
};

export default DebugDiv;
