import React from 'react';
import ReactDOM from 'react-dom';

import Container from './container';
import InputExample from './input-example';
import ButtonExample from './button-example';

const buttonStyles = {
  margin: '0 .25rem 0 0'
}

const StrExample = () => {
  return (
    <Container
      spans={[
        {components: 'testing testing'},
        {components: [
          'hello ',
          'world'
        ]}
      ]} />
  )
}

const ComponentExample = () => {
  return (
    <Container
      styles='offset'
      spans={[
        {components: <InputExample />},
        {components: [
          <ButtonExample
            componentStyles={buttonStyles}>
            Post Message
          </ButtonExample>,
          <ButtonExample>Clear</ButtonExample>
        ], styles: 'fit'}
      ]} />
  )
}

ReactDOM.render(<StrExample />, document.querySelector('#str-example'));
ReactDOM.render(<ComponentExample />,
  document.querySelector('#component-example'));
