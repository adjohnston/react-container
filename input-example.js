import React from 'react';

const componentStyles = {
  width: '100%',
  height: '2rem',
  padding: '0 .5rem',
  border: '2px solid currentColor',
  boxSizing: 'border-box',
  fontSize: '1rem'
}

const InputExample = () => {
  return (
    <input
      style={componentStyles}
      type="text"
      placeholder="A simple input field" />
  );
};

export default InputExample;
