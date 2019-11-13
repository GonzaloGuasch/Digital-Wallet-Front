import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import App from "./js/App";
import Login from "./js/Login";
import Router from "./Router";

ReactDOM.render(
    <Router/>, document.getElementById('digitalWallet')
);
