import React from "react";
import { Link } from "react-router-dom";
import SplashHeaderContainer from "./splash_header_cotainer";
export default class Splash extends React.Component {
  render() {
    <div className="divSplashpics">
      <img className="imgSplash" src={window.splash16} />
      <img className="imgSplash" src={window.splash17} />
    </div>;
    return (
      <div>
        <div>
          <SplashHeaderContainer />
        </div>

        <div className="all-splash">
          <div className="splash-title">
            <h1>Get your next idea</h1>
          </div>

          <div className="containerSplashImg">
            <div className="divSplashpics">
              <div id="cf">
                <img className="top" src={window.splash3} />
                <img className="bottom" src={window.splash12} />
              </div>
              <div id="cf">
                <img className="top" src={window.c32} />
                <img className="bottom" src={window.c22} />
              </div>
            </div>

            <div className="divSplashpics">
              <div className="dummy1"></div>
              <div id="cf">
                <img className="top" src={window.c6} />
                <img className="bottom" src={window.c39} />
              </div>
              <div id="cf">
                <img className="top" src={window.c18} />
                <img className="bottom" src={window.c36} />
              </div>
            </div>

            <div className="divSplashpics">
              <div className="dummy2"></div>
              <div id="cf">
                <img className="top" src={window.c30} />
                <img className="bottom" src={window.c16} />
              </div>
              <div id="cf">
                <img className="top" src={window.c33} />
                <img className="bottom" src={window.splash14} />
              </div>
            </div>

            <div className="divSplashpics">
              <div id="cf">
                <h2 className="textinsplash">
                      <div>Y</div>
                      <div><i className="fab fa-opera"></i></div>
                      
                    </h2>
              </div>
              <div id="cf">
                <img className="top" src={window.c27} />
                <img className="bottom" src={window.c26} />
              </div>
            </div>

            <div className="divSplashpics">
              <div className="dummy2"></div>
              <div id="cf">
                <img className="top" src={window.c38} />
                <img className="bottom" src={window.c37} />
              </div>
              <div id="cf">
                <img className="top" src={window.c7} />
                <img className="bottom" src={window.splash15} />
              </div>
            </div>

            <div className="divSplashpics">
              <div className="dummy1"></div>

              <div id="cf">
                <img className="top" src={window.c5} />
                <img className="bottom" src={window.c17} />
              </div>
              <div id="cf">
                <img className="top" src={window.c34} />
                <img className="bottom" src={window.c25} />
              </div>
            </div>

            <div className="divSplashpics">
              <div id="cf">
                <img className="top" src={window.c28} />
                <img className="bottom" src={window.dress2} />
              </div>
              <div id="cf">
                <img className="top" src={window.c35} />
                <img className="bottom" src={window.c23} />
              </div>
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
