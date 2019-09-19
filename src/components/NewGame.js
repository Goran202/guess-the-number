import React from 'react';

const NewGame = (props) => {
  const styles = {
    backgroundColor: 'blue',
    color: 'black',
  };
  return (
    <button className="block btn" style={styles} onClick={props.resetGame}>
      NEW GAME{' '}
    </button>
  );
};

export default NewGame;
