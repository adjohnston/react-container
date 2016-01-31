import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';
import InputExample from './components/input-example';
import ButtonExample from './components/button-example';

const StrExample = () => {
  return (
    <Container
      spans={[
        {components: 'testing testing'},
        {components: ['hello ', 'world']}
      ]} />
  )
}

const ComponentExample = () => {
  return (
    <Container
      styles='offset'
      spans={[
        {components: <InputExample />},
        {components: <ButtonExample>Post Message</ButtonExample>, styles: 'fit'}
      ]} />
  )
}

ReactDOM.render(<StrExample />, document.querySelector('#str-example'));
ReactDOM.render(<ComponentExample />,
  document.querySelector('#component-example'));
