import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import Login from "./Login";
import PanelAdmin from "./PanelAdmin";
import Register from "./Register";
import Router from "./Router";

ReactDOM.render(<Router />, document.getElementById('digitalWallet'));
