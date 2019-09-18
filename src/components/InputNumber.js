import React from 'react';

const InputNumber = (props) => {
  const styles = {
    height: 40,
    width: 200,
    margin: 'auto',
    display: 'block',
    backgroundColor: 'orange',
    color: 'black',
  };
  return (
    <form onSubmit={props.handleInput}>
      <input
        type="number"
        min="1"
        max="100"
        value={props.currentGuessNumber}
        onChange={props.updateValue}
        style={styles}
      />
      <input
        style={styles}
        type="button"
        value="Make a guess!"
        onClick={props.handleInput}
      />
    </form>
  );
};

export default InputNumber;
