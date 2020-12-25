import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const AdminRoute = ({component: Component, restricted, ...rest}) => {
const UserRoute = ({component: Component, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            // isLogin() && restricted ?
            sessionStorage.getItem('username') && sessionStorage.getItem('role') === "user" ?
            <Component {...props} />   
            : <Redirect to="/sign-in" />
            
        )} />
    );
};

export default UserRoute;