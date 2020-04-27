import React, { Component } from "react";
import { Redirect, RedirectProps } from 'react-router'
import {Homen} from "../homen"
import { Route } from 'react-router-dom';


import $ from 'jquery'

import "./start.css";

const home = <Route path='/' component={Homen} exact />

class Start extends Component {
    
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
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta http-equiv="refresh" content="10;/Homen"/>
                <meta name="keywords" content="Farok Eyada, home" />
                <meta name="description" content="Farok Eyada's personal website" />
                <link rel="stylesheet" type="text/css" href="style2.css" />
                <link href="https://fonts.googleapis.com/css?family=Raleway:400" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" type="text/css" />
                <div className="body">

                    <div id={this.state.loader + "-wrapper"}>
                        <div id={this.state.loader} />
                        <div className={this.state.loader + "-section section-left"} />
                        <div className={this.state.loader + "-section section-right"} />
                    </div>
                </div>
                <div className="parent">
                    <h1 className="right uc">Farok Eayda</h1> 
                    <ul className="child hover fade-in">
                    <p className="all25" style={{color: '#50E3C2'}} > “ Reality must be more beautiful, honest and clear than   <span>imagination</span>. ”</p>
                        {/* <li className="all25"><a href="portfolio.html">portfolio</a></li>
                        <li className="all25"><a href="resume.html">resume</a></li>
                        <li className="all25"><a href="about.html">about</a></li>
                        <li className="all25"><a href="contact.html">contact</a></li> */}
                    </ul>
               
                </div> 

        </div>

     );


    }   
    
}

 
export {Start};