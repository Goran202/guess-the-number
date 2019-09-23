import React from 'react';
import PropTypes from 'prop-types';

const InputNumber = ({ gameOver, handleInput, currentGuessNumber, updateValue }) => {
  return (
    <form onSubmit={handleInput}>
      <input
        placeholder="Type in your guess..."
        className="block form-control"
        type="number"
        min="1"
        max="100"
        value={currentGuessNumber}
        onChange={updateValue}
        disabled={gameOver}
      />
      <input
        className="block btn btn-primary"
        type="submit"
        value="Make a guess!"
        disabled={gameOver}
      />
    </form>
  );
};

InputNumber.propTypes = {
  currentGuessNumber: PropTypes.number.isRequired,
  updateValue: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default InputNumber;
