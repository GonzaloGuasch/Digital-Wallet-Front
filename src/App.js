import React from 'react';
import Register from "./js/Register";
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import CashIn from "./js/CashIn";
import ProfileView from "./js/ProfileView";
import Login from "./js/Login";
import Movimientos from "./js/Movimientos"
import Transfer from "./js/Transfer";


class App extends React.Component {
 render() {
     return(
         <div className='digital-wallet'>
             <BrowserRouter>
                 <Switch>
                     <Route exact path="/" component={Login}/>
                     <Route exact path="/register" component={Register}/>
                     <Route exact path="/cashin" component={CashIn}/>
                     <Route exact path="/profile" component={ProfileView}/>
                     <Route exact path="/movimientos" component={Movimientos}/>
                     <Route exact path="/transfer" component={Transfer}/>
                     <Route path="*" component={Login}/>
                 </Switch>
             </BrowserRouter>
         </div>
     )
 }
}

export default App;