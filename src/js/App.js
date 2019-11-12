import React, {Component} from 'react';
import '../css/App.css';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import ProfileView from "./ProfileView";
import Login from "./Login";
import CashIn from './CashIn';
import Transfer from "./Transfer";
import NavBar from "./NavBar";

class App extends Component {

    render() {
        return (
            <div className='digital-wallet'>

                <BrowserRouter>
                    <Switch>
                        <Route path="/cashin" render={props => <CashIn {...props} />}/>
                        <Route path="/transfer" component={Transfer}/>
                        <Route path="/" render={props => <ProfileView {...props}/>}/>
                        <Route path="*" component={Login}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
