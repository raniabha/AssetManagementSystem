import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Switch} from "react-router-dom";

import Login from "./signInUp/Login";
import SignUp from "./signInUp/Signup";
import Profile from "./profile/Profile"

import DashBoard from './AdminPages/DashBoard';
import Asset from './AdminPages/assets/Asset';
import RequestList from './AdminPages/assets/ReqestList';

import ManagerDashbord from './MangerPages/ManagerDash';
import RequestStatus from './MangerPages/assets/RequestStatus';
import Assets from './MangerPages/assets/Assets';

import AuthRoute from './hoc/AuthRoute';
import PrivateRoute from './hoc/PrivateRoute'


function App() {
  return (
      
    <Router>
      <Switch>
        <AuthRoute exact path='/' component={Login} />
        <AuthRoute path="/sign-in" component={Login} />
        <AuthRoute path="/sign-up" component={SignUp} />
        <PrivateRoute path="/setting"  admin={Profile} manager={Profile} />
        <PrivateRoute path='/dashboard' admin={DashBoard}  manager={ManagerDashbord} />
        <PrivateRoute path='/status' admin={RequestList} manager={RequestStatus} />
        <PrivateRoute path='/asset' admin={Asset} manager={Assets}/>
        
      </Switch>
    </Router>
  );
}
export default App;
