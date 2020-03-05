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
               <button
                 className="splashsignin"
                 onClick={() => openModal("Log in")}
               >
                 {/* <Link className="navcontentlongin">Log In</Link> */}
                 <p className="navcontentlongin">Log In</p>
               </button>
               <button
                 className="splashsignup"
                 onClick={() => openModal("Sign up")}
               >
                 {/* <Link className="navcontentlongout">Sign Up</Link> */}
                 <p className="navcontentlongout">Sign Up</p>
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

       