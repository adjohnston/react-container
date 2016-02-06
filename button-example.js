import React from 'react';

const ButtonExample = (props) => {
  const {
    children: text
  } = props;

  return (
    <button
      className="button action-button">
      {text}
    </button>
  );
};

export default ButtonExample;
