import React, {Component} from 'react';
import '../css/App.css';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import ProfileView from "./ProfileView";
import Login from "./Login";
import CashIn from './CashIn';
import Transfer from "./Transfer";

class App extends Component {

    render() {
        return (
            <div className='digital-wallet'>
                <BrowserRouter>
                    <Switch>
                        <Route path="/cashin" component={CashIn}/>
                        <Route path="/transfer" component={Transfer}/>
                        <Route path="/" component={ProfileView}/>
                        <Route path="*" component={Login}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
