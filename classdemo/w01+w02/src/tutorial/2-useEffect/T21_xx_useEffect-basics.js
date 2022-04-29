import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const T21_xx_UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(100);

  useEffect( () => {
     console.log('call effect ' + value);
     if (value > 0 ){
       document.title = `New Message(${value})`
     }
  }, [value]);


  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={ () => setValue(value + 1)}> Value + 1</button>
      <h1>{value2}</h1>
      <button className='btn' onClick={ () => setValue2(value2 + 1)}>Value2 + 1</button>
    </>
  );
};

export default T21_xx_UseEffectBasics;
