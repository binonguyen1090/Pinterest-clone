import React from "react";
import { Link, Redirect } from "react-router-dom";

export const Navbar = ({ currentUser, logout, openModal}) => {
         const display = currentUser ? (
            ""
         ) : (
           <div className="navbar not_login">
             <div>
               <img src={window.logo} id="logo" />
             </div>

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
               <button
                 className="splashsignin"
                 onClick={() => openModal("Log in")}
               >
                 <p className="navcontentlongin">Log In</p>
               </button>

               <button
                 className="splashsignup"
                 onClick={() => openModal("Sign up")}
               >
                 <p className="navcontentlongout">Sign Up</p>
               </button>
             </div>
           </div>
         );

     
    return (
      <div>{display}</div>
    )
};

       