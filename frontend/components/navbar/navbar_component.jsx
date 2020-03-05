import React from 'react';

export const Navbar = ({ currentUser, logout}) => {
         const display = !currentUser ? (
            ""
         ) : ( 
    <div className="homeNavbar">

        <div><h1> this is Logo </h1></div>

        <div className="searchbar">SearchBar </div>

                     <div className="rightNav">
            <div>Home </div>
            <div>Following </div>
            <div><h3>Hello, {currentUser.email}</h3> </div>
            <div>Inbox </div>
            <div>Notification </div>
            <button onClick={logout}>Logout</button>
        </div>


    </div>
        //    <div className="navbar not_login">
        //      <div>
        //        <img src={window.logo} id="logo" />
        //      </div>

        //      <div className="signinupbutton">
        //        <Link id="navcontent" to="/">
        //          About
        //        </Link>
        //        <Link id="navcontent" to="/">
        //          Busiess
        //        </Link>
        //        <Link id="navcontent" to="/">
        //          Blog
        //        </Link>
        //        <button
        //          className="splashsignin"
        //          onClick={() => openModal("Log in")}
        //        >
        //          <p className="navcontentlongin">Log In</p>
        //        </button>

        //        <button
        //          className="splashsignup"
        //          onClick={() => openModal("Sign up")}
        //        >
        //          <p className="navcontentlongout">Sign Up</p>
        //        </button>
        //      </div>
        //    </div>
         );

     
    return (
      <div >{display}</div>
    )
};



       