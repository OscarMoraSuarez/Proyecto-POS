import React from 'react';
import ReactDOM from 'react-dom/client';
/////////////////////////
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap';
import '@popperjs/core';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './style.css';
/////////////////////////
import { PosApp } from './PosApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <PosApp />
    </BrowserRouter>
  </Provider>

)
