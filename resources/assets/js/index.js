import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dots-loader/index.css';

render(
  <div>
  <BrowserRouter>{routes}</BrowserRouter>
  </div>,
  document.getElementById('app')
);