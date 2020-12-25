import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const adminR = (props, Component) => {
    let retunvar;
    if(sessionStorage.getItem("username") && sessionStorage.getItem("role") === "admin"){
      retunvar = <Component {...props}/> 
    }else{
      retunvar = <Redirect to="/sign-in" />
    }
    return(
      retunvar
    )
  }

function AdminRoute({component: Component, ...rest}){
    return (
        <Route {...rest} render={(props) => adminR(props, Component)} />
    );
    
};

export default AdminRoute;