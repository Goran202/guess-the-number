import React from 'react';
import PropTypes from 'prop-types';

const NewGame = ({ resetGame }) => {
  const styles = {
    backgroundColor: 'blue',
    color: 'black',
  };
  return (
    <button className="block btn" type="button" style={styles} onClick={resetGame}>
      NEW GAME
    </button>
  );
};

NewGame.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

export default NewGame;
