import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

export default class AuthRoute extends Component {
    checkifAuth = (props) => {
        let returnvar;
        if(sessionStorage.getItem("username")){
            returnvar = <Redirect to="/dashboard" />
        }else{
            returnvar = <this.props.component {...props} /> 
        }

        return (
            returnvar
        )
    }

    render() {
        return (
            <Route path={this.props.path} render={(props) => this.checkifAuth(props)}/>
            // <Route path="/sign-up" render={<Redirect to="/dashboard" />}/>
        )
    }
}
