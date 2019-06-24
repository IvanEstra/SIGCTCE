import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import Registro from './views/Registro';
import Principal from './views/Principal';
import User from './views/User';
import Beneficiarios from './views/Beneficiarios';
import NumBene from './views/NumBene';
import ListUser from './views/ListUser';


class Router extends Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/registro" component={Registro}/>
                <Route path="/principal" component={Principal} />
                <Route path="/user" component={User} />
                <Route path="/beneficiarios" component={Beneficiarios}/>
                <Route path="/numbene" component={NumBene} />
                <Route path="/listuser" component={ListUser}/>
                
            </Switch>
        );
    }
}

export default Router;
