import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Switch} from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Profile from "./profile/Profile"

import DashBoard from './AdminPages/DashBoard';
import Asset from './AdminPages/assets/Asset';
import RequestList from './AdminPages/assets/ReqestList';
import AssignedAsset from './AdminPages/assets/AssignedAsset';
import AddAsset from './AdminPages/assets/AddAsset';

import ManagerDashbord from './MangerPages/ManagerDash';
import RequestStatus from './MangerPages/assets/RequestStatus';
import UserAssignedAsset from './MangerPages/assets/assignedAsset';
import UserPendingAsset from './MangerPages/assets/pendingAsset';
import RejectedAsset from './MangerPages/assets/RejectesAsset';
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

        <AdminRoute path="/setting" component={Profile} />
        <AdminRoute path='/adminhome'  component={DashBoard} />
        <AdminRoute path='/asset' component={Asset} />
        <AdminRoute path="/requestlist" component={RequestList} />
        <AdminRoute path="/assignedasset" component={AssignedAsset} />
        <AdminRoute path='/addasset' component={AddAsset} />

        <UserRoute path='/userhome'  component={ManagerDashbord} />
        <UserRoute path='/status' component={RequestStatus} />
        <UserRoute path='/assetlist' component={Assets} />
        <UserRoute path='/userassignedasset' component={UserAssignedAsset} />
        <UserRoute path='/userpendingasset' component={UserPendingAsset} />
        <UserRoute path='/rejectedasset' component={RejectedAsset} />
      </Switch>
    </Router>
  );
}
export default App;
