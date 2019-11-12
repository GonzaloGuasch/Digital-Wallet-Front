import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import App from "./js/App";
import Transfer from "./js/Transfer";
import Movimientos from "./js/Movimientos";
import NavBar from "./js/NavBar";
import PanelAdmin from "./js/PanelAdmin";

ReactDOM.render(
       //<Transfer user={'060065243'} />, document.getElementById('digitalWallet')
    //<Movimientos user={'060065243'} />, document.getElementById('digitalWallet')
    <App />, document.getElementById('digitalWallet')
);
