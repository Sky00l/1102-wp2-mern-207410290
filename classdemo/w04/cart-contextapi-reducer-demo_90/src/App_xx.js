import React from 'react'
import { useGlobalContext } from './context_xx'

// components
import Navbar_xx from './Navbar_xx'
import CartContainer_xx from './CartContainer_xx'
// items

function App_xx() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar_xx />
      <CartContainer_xx />
    </main>
  )
}

export default App_xx
