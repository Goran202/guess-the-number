import React from 'react';

const InputNumber = (props) => {
  const styles = {
    // backgroundColor: 'orange',
    // color: 'black',
  };
  return (
    <form onSubmit={props.handleInput}>
      <input
        placeholder="Type in your guess..."
        className="block form-control"
        type="number"
        min="1"
        max="100"
        value={props.currentGuessNumber}
        onChange={props.updateValue}
        style={styles}
      />
      <input
        className="block btn btn-primary"
        style={styles}
        type="button"
        value="Make a guess!"
        onClick={props.handleInput}
      />
    </form>
  );
};

export default InputNumber;
