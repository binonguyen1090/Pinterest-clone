import React from "react";
import { Link, Redirect } from "react-router-dom";

export const Navbar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Hello, {currentUser.email}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="navbar not_login">
      <div>
        <img src="assets/logo.png" id="logo" />
      </div>

      {/* <div className="buttonandcontentnav"> */}
      {/* <div className="navcontent">
        <Link id="navcontent" to="/">
          About
        </Link>
        <Link id="navcontent" to="/">
          Busiess
        </Link>
        <Link id="navcontent" to="/">
          Blog
        </Link>
      </div> */}

      <div className="signinupbutton">
        <Link id="navcontent" to="/">
          About
        </Link>
        <Link id="navcontent" to="/">
          Busiess
        </Link>
        <Link id="navcontent" to="/">
          Blog
        </Link>
        <button className="splashsignin">
          <Link className="navcontentlongin" to="/login">
            Log In
          </Link>
        </button>
        <button className="splashsignup">
          <Link className="navcontentlongout" to="/signup">
            Sign Up
          </Link>
        </button>
      </div>
      {/* </div> */}
    </div>
  );

  return (
    <div>
      <div>{display}</div>
    </div>
  );
};
