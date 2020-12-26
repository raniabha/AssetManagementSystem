import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Profile from "./profile/Profile"

import AdminHome from "./AdminPages/adminHome";
import ManagerHome from "./MangerPages/ManagerHome";

import DashBoard from './AdminPages/DashBoard';
import Asset from './AdminPages/assets/Asset';
import RequestList from './AdminPages/assets/ReqestList';
import AssignedAsset from './AdminPages/assets/AssignedAsset';

import ManagerDashbord from './MangerPages/ManagerDash';
import RequestStatus from './MangerPages/assets/RequestStatus';

import Assets from './MangerPages/assets/Assets';

import AdminRoute from './hoc/AdminRoute';
import AuthRoute from './hoc/AuthRoute';
import UserRoute from './hoc/UserRoute';


function App() {
  return (
      
    <Router>
      <Switch>
        <AuthRoute exact path='/' component={Login} />
        <AuthRoute path="/sign-in" component={Login} />
        <AuthRoute path="/sign-up" component={SignUp} />

        <Route path="/setting"  render={() => <Profile home={<AdminHome/>} />} />
        <Route path="/managersetting"  render={() => <Profile home={<ManagerHome/>}/>}  />

        <AdminRoute path='/adminhome'  component={DashBoard} />
        <AdminRoute path='/asset' component={Asset} />
        <AdminRoute path="/requestlist" component={RequestList} />
        <AdminRoute path="/assignedasset" component={AssignedAsset} />

        <UserRoute path='/userhome'  component={ManagerDashbord} />
        <UserRoute path='/status' component={RequestStatus} />
        <UserRoute path='/assetlist' component={Assets} />
        
      </Switch>
    </Router>
  );
}
export default App;
