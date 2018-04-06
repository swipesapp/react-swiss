import React, { PureComponent } from 'react';
import { styleElement, setOption, addMixin, addGlobalStyles, SwissProvider, SwissGlobalProvider, SwissServerSide } from 'react-swiss';

import sw from './App.swiss';
setOption('debug', true);

addGlobalStyles({
  '@keyframes fire-diamonds': {
    '0%': {
      transform: 'translateY(25%) translateX(-50%) rotate(45deg) scale(0)',
    },
    '50%': {
      transform: 'translateY(-75%) translateX(-50%) rotate(45deg) scale(1)',
    },
    '100%': {
      transform: 'translateY(-200%) translateX(-50%) rotate(45deg) scale(0)',
    }
  },
  '@media $max600': {
    '.hello': {
      color: 'blue',
      '&:hover': {
        color: 'white',
      }
    }
  }
});
const Wrapper = styleElement('div', 'Wrapper', sw.Wrapper);
const NewWrapper = styleElement('div', 'New', Wrapper, { color: 'blue' });
const ExtendedWrapper = styleElement(Wrapper, 'Extended', { color: 'red' });
const Label = styleElement('span', 'Label', {
  _size: ['100px', '100px'],
  background: 'blue',
});

class App extends PureComponent {
  render() {
    return (
      <SwissGlobalProvider>
        <SwissProvider>
          <Wrapper>
            <Label width="200px" onClick={() => console.log('hi')} color="rgba(#ff4400, 0.9)">Hello</Label>
          </Wrapper>
          <NewWrapper />
          <ExtendedWrapper />
        </SwissProvider>
      </SwissGlobalProvider>
    );
  }
}

export default App;