import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditionally

const T12_xx_UseStateBasics = () => {
  // let title = 'random title';

  const [text, setText] = useState('random title');

  const handleClick = () => {
    if( text === 'random title'){
      setText('Hello World');
    } else {
      setText('random title');
    }
  }

  return (
    // JSX
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default T12_xx_UseStateBasics;
