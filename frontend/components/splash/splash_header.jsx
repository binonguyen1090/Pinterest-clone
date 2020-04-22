import React from "react";
import { Link, Redirect } from "react-router-dom";

export const SplashHeader = ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    ""
  ) : (
    <div className="navbar not_login">
      <div className="left-not-login-navbar">
        {/* <button> */}

        <Link id="navcontent" to="/">
          <img src={window.logo2} id="logo" />
        </Link>
      </div>

      <div className="signinupbutton">
        <a
          href="https://github.com/binonguyen1090"
          target="_blank"
          id="navcontent"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/binonguyen1090"
          target="_blank"
          id="navcontent"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.binonguyen.com/" target="_blank " id="navcontent">
          <i className="fas fa-portrait"></i>
        </a>
        <button className="splashsignin" onClick={() => openModal("Log in")}>
          <p className="navcontentlongin">Log In</p>
        </button>

        <button className="splashsignup" onClick={() => openModal("Sign up")}>
          <p className="navcontentlongout">Sign Up</p>
        </button>
      </div>
    </div>
  );

  return <div>{display}</div>;
};
