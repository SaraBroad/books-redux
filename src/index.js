import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';

ReactDOM.render((
     <BrowserRouter>
          <Route path="/" component={App}/>
     </BrowserRouter>
     ),
     document.getElementById('root')
);