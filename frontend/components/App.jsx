import React from "react";
import GreetingContainer from "./greeting/greeting_container"
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import Splash from "./session/login_form_container";
import { AuthRoute} from '../util/route_util'
const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>


    <Route exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />

  </div>
);

export default App;