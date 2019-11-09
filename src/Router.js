import React from 'react';
import Login from "./Login";
import Register from "./Register";
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import HelloWord from "./HelloWord";

class Router extends React.Component{
 render() {
     return(
         <div className='digital-wallet'>
             <BrowserRouter>
                 <Switch>
                     <Route exact path="/" component={Login}/>
                     <Route exact path="/register" component={Register}/>
                     <Route exact path="/hello" component={HelloWord}/>
                 </Switch>
             </BrowserRouter>
         </div>
     )
 }
}

export default Router;