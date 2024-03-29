/* eslint-disable react/jsx-filename-extension */
import React, { StrictMode } from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './App.css';

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app'),
);
