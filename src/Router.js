import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import Registro from './views/Registro';
import Principal from './views/Principal';
import User from './views/User';


class Router extends Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/registro" component={Registro}/>
                <Route path="/principal" component={Principal} />
                <Route path="/user" component={User} />
                
            </Switch>
        );
    }
}

export default Router;
