import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import App from "./js/App";
import Transfer from "./js/Transfer";
import Movimientos from "./js/Movimientos";
import NavBar from "./js/NavBar";

ReactDOM.render(
   // <NavBar />, document.getElementById('digitalWallet')
    <Movimientos cvu = {'060065243'} />, document.getElementById('digitalWallet')
);
