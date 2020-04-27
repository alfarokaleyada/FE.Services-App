import React, { useState } from 'react';
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


const Homen = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  

  
  return (
    <div>
      
     <header>
          <div className="container">
            <div className="intro-text">
            {/* <div className="intro-heading" >We are the best Team of</div> */}

              <div className="intro-lead-in" style={{color: '#777'}} >Architect</div>
              <a href="/Registration" className="page-scroll btn btn-xl">GET STARTED FE DESIGNER!!</a>
            </div>
          </div>
        </header>
        {/* Services Section */}
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Services</h2>
                <h3 className="section-subheading text-muted">The services provided are high quality, accurate and adjustable.</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="glyphicon glyphicon-tree-conifer" />
                </span>
                <h4 className="service-heading">Concept & Idea</h4>
                <p className="text-muted"> Presenting ideas and suggestions that help to choose the best design style.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="glyphicon glyphicon-heart" />
                </span>
                <h4 className="service-heading">Interior Design</h4>
                <p className="text-muted">Interior designs for all places and redesign all you need to send a picture and dimensions of the places you want to design.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="glyphicon glyphicon-tint" />
                </span>
                <h4 className="service-heading">Exterior design</h4>
                <p className="text-muted">The design includes both horizontal projectors and sections, and we also offer 3D and 3D graphics.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Grid Section */}
        <section id="portfolio" className="bg-light-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Samples</h2>
                <h3 className="section-subheading text-muted">Some of our works.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img src="https://i.ibb.co/PhnNSwF/2020-04-26-15-19-37t.png" className="img-responsive" alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>3D model </h4>
                  <p className="text-muted"> Design</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img src=" https://i.ibb.co/4PGY7Vx/IMG-3660.jpg" className="img-responsive" alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>Section</h4>
                  <p className="text-muted"> Design</p>
                </div>
              </div>
         
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img src="https://i.ibb.co/LtprDMw/IMG-3122.jpg" className="img-responsive" alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>Sketch</h4>
                  <p className="text-muted"> Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>
     
    
    </div>
  );
}

export {Homen};