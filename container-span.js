import React from 'react';

const ContainerSpan = ({children: content, styles: styles = []} = props) => {
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
      style={componentStyles}>

      {content}

    </div>
  )
}

export default Span;
