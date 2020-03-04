import React from 'react'
import {Background} from './splash_background'
import { Link } from "react-router-dom";

export default class Splash extends React.Component {
    render(){
        return (
          <div className="all-splash">
            <div className="splash-title">
              <h1>Get ur next idea</h1>
            </div>
            <div className="containerSplashImg">
              <div className="divSplashpics">
                <img className="imgSplash" src="assets/splash11" />
                <img className="imgSplash" src="assets/splash6" />
              </div>
              <div className="divSplashpics">
                <div className="dummy1"></div>
                <img className="imgSplash" src="assets/dress2" />
                <img className="imgSplash t" src="assets/splash3" />
              </div>
              <div className="divSplashpics">
                <div className="dummy2"></div>
                <img className="imgSplash" src="assets/splash7" />
                <img className="imgSplash" src="assets/splash5" />
              </div>
              <div className="divSplashpics">
                <h2 className="textinsplash">Yo</h2>
                <img className="imgSplash" src="assets/dress3" />
              </div>
              <div className="divSplashpics">
                <div className="dummy2"></div>
                <img className="imgSplash" src="assets/splash10" />
                <img className="imgSplash" src="assets/splash4" />
              </div>
              <div className="divSplashpics">
                <div className="dummy1"></div>
                <img className="imgSplash" src="assets/splash8" />
                <img className="imgSplash t" src="assets/dress4" />
              </div>
              <div className="divSplashpics last">
                <img className="imgSplash" src="assets/splash9" />
                <img className="imgSplash" src="assets/dress5" />
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
        );
    }
}




