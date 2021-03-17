import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header'
import Routes from './routes'

export default function src() {
 return (
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
 );
}