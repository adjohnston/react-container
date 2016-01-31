import React from 'react';
import Span from './span';

const Container = (props) => {
  const {
    spans,
    styles: styles = []
  } = props;

  const componentStyles = {
    margin:  styles.includes('offset')   ? '0 -1rem'     : '0',
    padding: styles.includes('noGutter') ? '0'           : '0 .5rem',
    display: styles.includes('inline')   ? 'inline-flex' : 'flex'
  }

  return (
    <div
      style={componentStyles}>

      {spans.map((child, i) => {
        const {
          styles,
          components
        } = child;

        return (
          <Span
            styles={styles}
            key={i}>

            {components}

          </Span>
        )
      })}

    </div>
  )
}

export default Container;
