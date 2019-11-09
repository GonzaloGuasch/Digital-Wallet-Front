import React from 'react';
import Login from "./Login";
import Register from "./Register";
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import HelloWorld from "./HelloWorld";

class Router extends React.Component{
 render() {
     return(
         <div className='digital-wallet'>
             <BrowserRouter>
                 <Switch>
                     <Route exact path="/" component={Login}/>
                     <Route exact path="/register" component={Register}/>
                     <Route exact path="/hello" component={HelloWorld}/>
                 </Switch>
             </BrowserRouter>
         </div>
     )
 }
}

export default Router;