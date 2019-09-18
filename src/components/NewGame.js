import React from 'react';
import { tsPropertySignature } from '@babel/types';

const NewGame = (props) => {
  const styles = {
    height: 40,
    width: 200,
    marginTop: 20,

    display: 'block',
    backgroundColor: 'blue',
    color: 'black',
  };
  return (
    <button style={styles} onClick={props.resetGame}>
      NEW GAME{' '}
    </button>
  );
};

export default NewGame;
