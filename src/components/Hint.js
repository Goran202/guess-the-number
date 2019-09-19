import React from 'react';

const Hint = (props) => {
  const styles = {
    // backgroundColor: 'blue',
    // color: 'yellow',
  };
  return (
    <div className="block btn btn-warning" style={styles}>
      {props.hintText}
    </div>
  );
};

export default Hint;
