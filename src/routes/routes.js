import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout/Layout';
import Signin from '../components/Signin/Signin';
import Signup from '../components/Signup/Signup';
import Petowner from '../containers/Profile/Petowner/Petowner';
import Caregiver from '../containers/Profile/Caregiver/Caregiver';
import Profile from '../containers/Profile/Profile';


export default (
  <Switch>
    <Route exact path="/" component={ Layout }/>
    <Route path="/signin" component={ Signin }/>
    <Route path="/signup/petowner" component={ Signup }/>
    <Route path="/signup/caregiver" component={ Signup }/>
    <Route path="/profile" component={ Profile }/>
  </Switch>
)