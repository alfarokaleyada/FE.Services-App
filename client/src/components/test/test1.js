import React, { Component } from "react";
import { Redirect, RedirectProps } from 'react-router'
import {Homen} from "../Homen"
import { Route } from 'react-router-dom';


import $ from 'jquery'

import "./test1.css";

const home = <Route path='/' component={Homen} exact />

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
                <h2>Thank You So Much</h2>
            <p>A small group of works that we did before, thanks and appreciation for your meeting with us.</p>
          <article>
            <div className="box">
              <div className="feed"><h2>Museum project</h2>
                <p>The project consists of galleries for monuments, as well as rest places and cinemas.</p>
              </div>
            </div>
            <div className="box"><img src="https://i.ibb.co/ftKyFrj/2020-04-26-15-19-37.png" alt="" /></div>
          </article>
          <article>
            <div className="box">
              <div className="feed"><h2>Vertical section</h2>
                <p>A vertical section of a two-storey house that contains several bedrooms and a garage.</p>
              </div>
            </div>
            <div className="box"><img src="https://i.ibb.co/HB72v0r/2020-04-26-15-29-18.png" alt="" /></div>
          </article>
          <article>
            <div className="box">
              <div className="feed"><h2>Graduation Project</h2>
                <p>A graduation project consisting of a museum, office and several theaters with galleries.</p>
              </div>
            </div>
            <div className="box"><img src="https://i.ibb.co/gP56qsz/2020-04-26-15-58-53.png" alt="" /></div>
          </article>
          <article>
            <div className="box">
              <div className="feed"><h2>Vertical section</h2>
                <p>A theater sector that contains several theaters and cinemas.</p>
              </div>
            </div>
            <div className="box"><img src="https://i.ibb.co/nbv2QF1/2020-04-26-16-00-20.png" alt="" /></div>
          </article>
          <article>
            <div className="box">
              <div className="feed"><h2>Layout</h2>
                <p>A public site that contains several buildings and is a large complex.</p>
              </div>
            </div>
            <div className="box"><img src="https://i.ibb.co/DQv0P22/2020-04-26-16-02-14.png" alt="" /></div>
          </article>
        
        </div>

     );


    }   
    
}

 
export default (Test);