import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './home.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// import 'semantic-ui-css/semantic.min.css'
// import { Menu } from 'semantic-ui-react'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
