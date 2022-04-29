import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_xx from './App_xx';
import { AppProvider_xx } from './context_xx';
ReactDOM.render(
  <React.StrictMode>
    <AppProvider_xx>
      <App_xx />
    </AppProvider_xx>
  </React.StrictMode>,
  document.getElementById('root')
);
