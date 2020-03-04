import React from 'react'
import {Background} from './splash_background'
import { Link } from "react-router-dom";

export default class Splash extends React.Component {
    render(){
        return (
          <div className="all-splash">
            <div className="splash title">
              <h1>Get your next</h1>
            </div>

            <div className="containerSplash">
              <div className="example">
                <img className="imgSplash" src="assets/dress3" />
                <img className="imgSplash" src="assets/dress4" />
              </div>
              <div className="example">
                <img className="imgSplash" src="assets/dress3" />
                <img className="imgSplash" src="assets/dress4" />
              </div>
              <div className="example">
                <img className="imgSplash" src="assets/dress3" />
                <img className="imgSplash" src="assets/dress4" />
              </div>
              <div className="example">
                <h2>Idea</h2>
                <img className="imgSplash" src="assets/dress3" />
                <img className="imgSplash" src="assets/dress4" />
              </div>
              <div className="example">
                <img className="imgSplash" src="assets/dress3" />
                <img className="imgSplash" src="assets/dress4" />
              </div>
              <div className="example">
                <img className="imgSplash" src="assets/dress3" />
                <img className="imgSplash" src="assets/dress4" />
              </div>
              <div className="example">
                <img className="imgSplash" src="assets/dress3" />
                <img className="imgSplash" src="assets/dress4" />
              </div>
              {/* <img className="imgSplash" src="assets/dress" /> */}
              {/* <img className="imgSplash" src="assets/dress2" />
              <img className="imgSplash" src="assets/dress3" />
              <img className="imgSplash" src="assets/dress4" />
              <img className="imgSplash" src="assets/dress5" /> */}
              {/* <img className="imgSplash" src="assets/dress6" /> */}
              {/* <img className="imgSplash" src="assets/noodle" /> */}
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
