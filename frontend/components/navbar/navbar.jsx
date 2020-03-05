import React from "react";
import { Link, Redirect } from "react-router-dom";

export const Navbar = ({ currentUser, logout, openModal}) => {
         const display = currentUser ? (
           <div>
             <h3>Hello, {currentUser.email}</h3>
             <button onClick={logout}>Logout</button>
           </div>
         ) : (
           <div className="navbar not_login">
             <div>
               {/* <img src="assets/logo.png" id="logo" /> */}
               <img src={window.splash6} id="logo" />;
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
           <div>
             <div>{display}</div>
           </div>
         );
       };

       