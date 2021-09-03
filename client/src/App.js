import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Public from './components/Public';
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated';

// New import
import withContext from "./Context";
import PrivateRoute from "./PrivateRoute";

// Connect the Header component to context
const HeaderWithContext = withContext(Header);
// Connect the Authenticated component to context
const AuthWithContext = withContext(Authenticated);
// Connect the UserSignUp component to context
const UserSignUpWithContext = withContext(UserSignUp);
// Connect UserSignIn component to context
const UserSignInWithContext = withContext(UserSignIn);
// Connect the UserSignOut component to context
const UserSignOutWithContext = withContext(UserSignOut);

export default () => (
  <Router>
    <div>
      <HeaderWithContext />

      <Switch>
        <Route exact path="/" component={Public} />
        <PrivateRoute path="/authenticated" component={AuthWithContext} />
        {/* <PrivateRoute path="/settings" component={AuthWithContext} /> */}
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
