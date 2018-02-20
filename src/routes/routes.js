import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout/Layout';
import Signin from '../components/Signin/Signin';
import Signup from '../components/Signup/Signup';
import Petowner from '../containers/Profile/Petowner/Petowner';
import Caregiver from '../containers/Profile/Caregiver/Caregiver';
import Profile from '../containers/Profile/Profile';
import Chat from '../components/Chat/Chat';
import UpdateMessage from '../components/UpdateMessage/UpdateMessage'


export default (
  <Switch>
    <Route exact path="/" component={ Layout }/>
    <Route path="/signin" component={ Signin }/>
    <Route path="/signup/petowner" component={ Signup }/>
    <Route path="/signup/caregiver" component={ Signup }/>
    <Route path="/profile" component={ Profile }/>
    <Route path="/chat" component={ Chat }/>
<<<<<<< HEAD
    <Route path="/update-message" component={UpdateMessage} />
=======
    <Route path="/caregiver" component={ Caregiver }/>
>>>>>>> caregiver
  </Switch>
)