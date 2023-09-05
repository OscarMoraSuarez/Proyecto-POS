import React from 'react';
import ReactDOM from 'react-dom/client';
/////////////////////////
import'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap';
import '@popperjs/core';
import'bootswatch/dist/cerulean/bootstrap.min.css';
import './style.css';
/////////////////////////
import { PosApp } from './PosApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PosApp/>
  </BrowserRouter>
  
)
