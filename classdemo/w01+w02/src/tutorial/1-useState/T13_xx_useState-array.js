import React from 'react';
import { data } from '../../data';

const T13_xx_UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  console.log('people', people);

  const removeItem = (id) => {
     let newPeople = people.filter( (p) => p.id !== id );
     setPeople(newPeople);
  }

  return (
    <>
      { people.map( (person) => {
        const { id, name } = person;
        return (
          <div id={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )

      } )}
      <button className='btn' onClick={ () => setPeople([]) }>Clear Items</button>
    </>
  );
};

export default T13_xx_UseStateArray;
