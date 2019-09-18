import React from 'react';

const InputNumber = (props) => {
  const styles = {
    backgroundColor: 'orange',
    color: 'black',
  };
  return (
    <form onSubmit={props.handleInput}>
      <input
        className="block"
        type="number"
        min="1"
        max="100"
        value={props.currentGuessNumber}
        onChange={props.updateValue}
        style={styles}
      />
      <input
        className="block"
        style={styles}
        type="button"
        value="Make a guess!"
        onClick={props.handleInput}
      />
    </form>
  );
};

export default InputNumber;
