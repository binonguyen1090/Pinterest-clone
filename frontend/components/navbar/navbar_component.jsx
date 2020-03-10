import React from 'react';
import { Link } from 'react-router-dom';



export const Navbar = ({ currentUser, logout}) => {
         const display = !currentUser ? (
            ""
         ) : ( 
    <div className="homeNavbar">
                     
            <div className="logoNav">
                <Link className="logoLink" to="/"><img className="navbarLogo" src={window.favicon} /></Link>       
            </div>

            <div className="topnav">  
                <input className="search" src={window.favicon}type="text" placeholder="Search.." />
            </div>

            <div className="rightNav">
                <a href={`/`} className="item" ><i class="fa fa-home"></i></a>
                <a href={`#`} className="item" ><i class="fas fa-users"></i></a>
                {/* <a href={`#`} className="item" ><i class="fas fa-sign-out-alt"></i></a> */}
                         {/* <div className="item" ><i class="fa fa-home"></i></div> */}
                {/* <div className="item" >Following </div> */}
                <div className="item" >
                    <Link className="proLink" to={`/users/${currentUser.id}`}>
                        <i className="far fa-smile">{currentUser.email.split('@')[0]}</i>
                    </Link>           
                </div>
                {/* <div className="item" >Inbox </div> */}
                         
                <a href={`#`} className="item comment" ><i class="fas fa-comment-dots"></i></a>
                <a href={`/`} className="item" ><i class="fas fa-bell"></i></a>

                <Link className="item" onClick={logout}><i class="fas fa-sign-out-alt"></i></Link>
            </div>
            

         
    </div>
        
         );

     
    return (
        <div >{display}</div>
    )
};



       



//saving
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