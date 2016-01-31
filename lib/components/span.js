import React from 'react';

const Span = (props) => {
  const {
    key,
    styles: styles = [],
    children: content
  } = props;

  let componentStyles = {
    padding: styles.includes('noGutter') ? '0' : '0 .5rem',
    
    flex: (() => {
      if (styles.includes('fit'))  return '0 0 auto';
      if (styles.includes('auto')) return '1 0 auto';

      return '1 0 0%';
    })()
  };

  return (
    <div
      style={componentStyles}
      key={key}>

      {content}

    </div>
  )
}

export default Span;