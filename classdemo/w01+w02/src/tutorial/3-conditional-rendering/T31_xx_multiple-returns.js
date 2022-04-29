import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsonn';

const T31_xx_MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
    .then((resp) => {
      if(resp.status >=200 && resp.status <=299){
        return resp.json();  
      } else {
        setIsLoading(false);
        setIsError(true);
        throw Error(resp.statusText);
      }
      
    })
    .then( (user) => {
      console.log('user', user)
      const { login } = user;
       setUser(login);
       setIsLoading(false);
    })
    .catch( (error) => console.log(error))
  }, []);

  if(isLoading) {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if(isError) {
    return(
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return <h2>{user}</h2>;
};

export default T31_xx_MultipleReturns;
