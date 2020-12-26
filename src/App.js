import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css'

import Login from "./signInUp/Login";
import SignUp from "./signInUp/Signup";

import DashBoard from './AdminPages/DashBoard';
import Asset from './AdminPages/assets/Asset';
import RequestList from './AdminPages/assets/ReqestList';

import ManagerDashbord from './MangerPages/ManagerDash';
import Assets from './MangerPages/assets/Assets';
import RequestStatus from './MangerPages/assets/RequestStatus';
import Profile from "./profile/Profile"

import AuthRoute from './hoc/AuthRoute';
import PrivateRoute from './hoc/PrivateRoute'


function App() {
  return (
      
    <Router>
      <Switch>
        <AuthRoute exact path='/' component={Login} />
        <AuthRoute path="/sign-in" component={Login} />
        <AuthRoute path="/sign-up" component={SignUp} />
        <PrivateRoute path='/dashboard' admin={DashBoard}  manager={ManagerDashbord} />
        <PrivateRoute path='/asset' admin={Asset} manager={Assets}/>
        <PrivateRoute path='/status' admin={RequestList} manager={RequestStatus} />
        <PrivateRoute path="/setting"  admin={Profile} manager={Profile} />
      </Switch>
    </Router>
  );
}
export default App;
