import React, {useContext, useReducer, useEffect } from 'react';
import cartItems_xx from './data';
import reducer_xx from './reducer_xx';

const AppContext_xx = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems_xx,
  total: 0,
  amount: 0,
}

const AppProvider_xx = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_xx, initialState);

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'});
  }

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id});
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS'});
  }, [state.cart]);

  return (
    <AppContext_xx.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext_xx.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext_xx);
};

export { AppContext_xx, AppProvider_xx };
