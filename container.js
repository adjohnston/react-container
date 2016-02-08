import React from 'react';
import ContainerSpan from './container-span';

const Container = ({spans, styles: styles = []} = props) => {
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
          <ContainerSpan
            styles={styles}
            key={i}>

            {components}

          </ContainerSpan>
        )
      })}

    </div>
  )
}

export default Container;
