import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const AdminRoute = ({component: Component, restricted, ...rest}) => {
const AuthRoute = ({component: Component, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            // isLogin() && restricted ?

            //if(loggedIN){
            //   if(role=="admin"){
            //       redirect to /adminhome
            //   }else{
            //      redirect to  /userhome
            //}else{
            //        <Component>
            //}       
            
            sessionStorage.getItem("username") ?
                sessionStorage.getItem("role") === "admin" ?
                    <Redirect to="/adminhome" />
                    : <Redirect to="/userhome" />
                : <Component {...props} />   
            
        )} />
    );
};

export default AuthRoute;