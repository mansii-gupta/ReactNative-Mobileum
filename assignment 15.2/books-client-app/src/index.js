import React from 'react';
import ReactDOM from 'react-dom';

//import bootstrap here 
import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/cjs/popper.js';

import 'bootstrap/dist/js/bootstrap.js';



import './App.scss';
import App from './App';



const root=document.querySelector("#root");

ReactDOM.render(<App/>, root);