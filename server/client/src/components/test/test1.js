import React, { Component } from "react";
import { Redirect, RedirectProps } from 'react-router'
import {Home} from "../Home/Home"
import { Route } from 'react-router-dom';


import $ from 'jquery'

import "./test1.css";

const home = <Route path='/' component={Home} exact />

class Test extends Component {
    
    state = {
        loader : "loader"
      };

     componentDidMount () {
            setTimeout(
                function() {
                    this.setState({ loader: "loaded" });
                }.bind(this),3000
              
            );    
                
      } 
      
    render() {
        return (
            <div>
                    <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal info.</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello!</h1>
              <p>Enter your personal details.</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
        </div>

        </div>

     );


    }   
    
}

 
export default (Test);