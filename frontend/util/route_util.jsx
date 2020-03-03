import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";


const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

//path from App passdown
const Auth = ({ component: Component, path, loggedIn, exact }) => ( 
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} /> 
    }
  />
);



export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
