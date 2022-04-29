import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App_90 from './App_90'
import { AppProvider } from './context'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider> 
      <App_90 />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
