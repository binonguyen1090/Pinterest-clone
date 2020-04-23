import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SignUpFormContainer from "./session/signup_form_container";
import LogInFormContainer from "./session/login_form_container";
import HomepageContainer from "./homepage/homepage_container";
import NavBarContainer from "./navbar/navbar_container";
import ProfileContainer from "./profile/profile_container";
import UserPageContainer from "./profile/user_page_container";
import EditBoardContainer from "./board/edit_board_form_container";
import SettingContainer from "./profile/setting_container";
import UserPinsContainer from "./pin/user_pins_container";
import ShowPinContainer from "./pin/user_pins_container";
import AllUsersContainer from "./allusers/all_users_container";

import BoardFormContainer from "./board/board_form";
import BoardShowContainer from "./board/board_show_container";
import BoardIndexContainer from "./board/board_index_container";
import EachUserPinsContainer from "./pin/userpage_pin_index_container";
import ResultsContainer from "./search_results/search_results_container";

import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />

    <header>
      <NavBarContainer />
    </header>

    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute exact path="/" component={HomepageContainer} />
    <Switch>
      <ProtectedRoute
        exact
        path="/boards/:boardId"
        component={BoardShowContainer}
      />
      <ProtectedRoute
        exact
        path="/users/:userId/pins"
        component={UserPinsContainer}
      />
      <ProtectedRoute
        exact
        path="/user/:userId/pins"
        component={EachUserPinsContainer}
      />
      <ProtectedRoute exact path="/users" component={AllUsersContainer} />
      <ProtectedRoute
        exact
        path="/users/:userId"
        component={ProfileContainer}
      />
      <ProtectedRoute
        exact
        path="/user/:userId"
        component={UserPageContainer}
      />
      <ProtectedRoute exact path="/settings" component={SettingContainer} />
      <Route exact path="/search/results" component={ResultsContainer} />

      {/* <Route path="/home/" component={NavBarContainer} /> */}

      {/* <Route path="/users/:userId/boards" component={BoardIndexContainer} /> */}
      {/* <ProtectedRoute exact path="/users/:user_id/boards" component={ProfileContainer} />  */}

      {/* <ProtectedRoute exact path="/boards/new" component={BoardFormContainer} />

    <ProtectedRoute exact path="/boards/:id" component={BoardShowContainer} />

    <ProtectedRoute exact path="/users/:user_id/boards" component={BoardIndexContainer} /> */}

      {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />  */}
    </Switch>
  </div>
);

export default App;
