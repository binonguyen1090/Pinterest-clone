import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ currentUser, logout }) => {
  const display = !currentUser ? (
    ""
  ) : (
    <div className="homeNavbar">
      <div className="logoNav">
        <Link className="logoLink" to="/">
          <img className="navbarLogo" src={window.favicon} />
        </Link>
      </div>

      <div className="topnav">
        <input
          className="search"
          src={window.favicon}
          type="text"
          placeholder="Search.."
        />
      </div>

      <div className="rightNav">
        <a href={`/`} className="item">
          <i className="fa fa-home"></i>
        </a>
        <a href={`/`} className="item">
          <i className="fas fa-users"></i>
        </a>

        <div className="item">
          <Link className="proLink" to={`/users/${currentUser.id}`}>
            <span className="i-circle">
              {currentUser.email[0].toUpperCase()}
            </span>{" "}
            <p className="email-nav">
              {currentUser.email.split("@")[0].slice(1)}
            </p>
          </Link>
        </div>

        <a href={`/`} className="item comment">
          <i className="fas fa-comment-dots"></i>
        </a>
        <a href={`/`} className="item">
          <i className="fas fa-bell"></i>
        </a>

        <Link to="" className="item" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>
        </Link>
      </div>
    </div>
  );

  return <div>{display}</div>;
};

