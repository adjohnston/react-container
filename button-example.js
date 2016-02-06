import React from 'react';

const componentStyles = {
  height: '2rem',
  padding: '0 .5rem',
  background: '#289B96',
  border: '0',
  cursor: 'pointer',
  fontSize: '1rem',
  color: '#fff'
}

const ButtonExample = (props) => {
  const {
    componentStyles: styles,
    children: text
  } = props;

  return (
    <button
      style={Object.assign({}, componentStyles, styles)}>
      {text}
    </button>
  );
};

export default ButtonExample;
