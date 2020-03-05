import React from 'react'
import { Link } from "react-router-dom";
import SplashHeaderContainer from './splash_header_cotainer';
export default class Splash extends React.Component {
    render(){
        return (
          <div>
            <div><SplashHeaderContainer /></div>
          <div className="all-splash">
            <div className="splash-title">
              <h1>Get ur next idea</h1>
            </div>
            <div className="containerSplashImg">
              <div className="divSplashpics">
                
                <img className="imgSplash" src={window.splash12} />
                <img className="imgSplash" src={window.splash3} />
              </div>
              <div className="divSplashpics">
                <div className="dummy1"></div>
                <img className="imgSplash" src={window.splash16} />
                <img className="imgSplash" src={window.splash17} />
              </div>
              <div className="divSplashpics">
                <div className="dummy2"></div>
                <img className="imgSplash" src={window.splash14} />

                <img className="imgSplash" src={window.splash5} />
              </div>
              <div className="divSplashpics">
                <h2 className="textinsplash">Yo</h2>
                <img className="imgSplash" src={window.dress6} />
              </div>
              <div className="divSplashpics">
                <div className="dummy2"></div>
                <img className="imgSplash" src={window.splash15} />

                <img className="imgSplash" src={window.splash4} />
              </div>
              <div className="divSplashpics">
                <div className="dummy1"></div>
                <img className="imgSplash" src={window.splash8} />
                <img className="imgSplash" src={window.splash18} />

              </div>
              <div className="divSplashpics">
                <img className="imgSplash" src={window.dress2} />
                <img className="imgSplash" src={window.dress4} />

              </div>
            </div>
            <div className="splashFooter">
              <Link to="/" className="no-underline">
                Terms of Service
              </Link>
              <Link to="/" className="no-underline">
                Privacy
              </Link>
              <Link to="/" className="no-underline">
                Help
              </Link>
              <Link to="/" className="no-underline">
                Iphone App
              </Link>
              <Link to="/" className="no-underline">
                Users
              </Link>
              <Link to="/" className="no-underline">
                Collections
              </Link>
              <Link to="/" className="no-underline">
                Topics
              </Link>
            </div>
          </div>


          </div>
        );
    }
}




