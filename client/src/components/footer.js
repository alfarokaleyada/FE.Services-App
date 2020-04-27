import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import "./navBar2.css";



const Footer = (props) => {
  

  
  return (
    <div>
      
         <footer>
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">FE Design 2020</span>
              </div>
              <div className="col-md-4 fotter">
              <ul className="list-inline quicklinks">

              <li> <a href="#"><i className="fa fa-twitter" /></a> </li>              
              <li>  <a href="#"><i className="fa fa-facebook" /></a> </li>                    
              <li> <a href="#"><i className="fa fa-linkedin" /></a></li>   
              {/* <li> <a href="#"><i  className="fa fa-instagram fa-3x fa-fw" /> </a></li>   */}
                   </ul> 
                 <p1>©<i>2020</i>  |<b> Farok Eyada. </b> All rights reserved. </p1>                
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  
                  <li><a href="#">Privacy Policy</a>
                  </li>
                  <li><a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
          </div>

        </footer>
     
        {/* jQuery Version 1.11.0 */}
        {/* Bootstrap Core JavaScript */}
        {/* Plugin JavaScript */}
        {/* Contact Form JavaScript */}
        {/* <span style={{height: '20px', width: '40px', minHeight: '20px', minWidth: '40px', position: 'absolute', opacity: '0.85', zIndex: 8675309, display: 'none', cursor: 'pointer', backgroundImage: 'url(data:image/png'}} /> */}
    </div>
  );
}

export {Footer};