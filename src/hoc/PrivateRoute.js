import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {
    adminOrUser = (props) => {
        let returnvar;
        if(sessionStorage.getItem("username")){
            if(sessionStorage.getItem("role") === "admin"){
                returnvar = <this.props.admin {...props}/>
            }else{
                returnvar = <this.props.manager {...props} />
            }
        }else{
            returnvar = <Redirect to="/sign-in" /> 
        }
        return (
            returnvar
        )
    }

    render() {
        return (
            <Route path={this.props.path} render={this.adminOrUser}/>
        )
    }
}
