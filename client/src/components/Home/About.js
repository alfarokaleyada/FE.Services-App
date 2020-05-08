import React, { Component } from 'react';
import { Button, CardGroup ,CardDeck, Card} from 'react-bootstrap';


import "./about.css";


class About extends Component {
    render() { 
        return (
            <div>
            <div style={{ backgroundImage: 'url("https://i.ibb.co/N1bkG25/IMG-3122.jpg")'}}> </div>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700" rel="stylesheet" />
            <div className="super1-container">
            <div className="left-content-container">
                <div className="quote1">
                <p>
                    “ Reality must be more beautiful, honest and clear than   <span>imagination</span>. ”
                </p>
                </div>
                <div className="titleHome">
                <h1>Farok Eyada</h1>
                <p>Designer</p>
                <p>Developer</p>
                <p>engineer</p>
                </div>
                <div className="content1">
                <p><span>FE Architecture</span> It is a North American team that provide architectural design services.</p>
                <p>We provide a special online service while you are sitting in your home, we provide drawing services, interior and exterior designs, and 2D and 3D designs...</p> 
                </div>
                <div className="learn-more1">
                <a href="/Registration">Get Started FE Designer!!</a>
                </div>
                
            </div>
            
            </div>


                <div className="back">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>

            <CardDeck>
                    <Card>
                        <figure className="snip15151">
                            <div className="profile-image"><img src="https://i.ibb.co/ftKyFrj/2020-04-26-15-19-37.png" alt="sample47" /></div>
                            <figcaption>
                                <h3>3D Model</h3>
                                <h4>MUSEUM PROJECT</h4>
                                <p>Was used in this project 3D Max and AutoCAD.</p>
                                <div className="icons"><a href="#"><i className="ion-social-reddit" /></a>
                                <a href="#"> <i className="ion-social-twitter" /></a>
                                <a href="#"> <i className="ion-social-vimeo" /></a>
                                </div>
                            </figcaption>
                            </figure>
                </Card>

                <Card>
                <figure className="snip15151">
                    <div className="profile-image"><img src="https://i.ibb.co/nbv2QF1/2020-04-26-16-00-20.png" alt="sample83" /></div>
                    <figcaption>
                        <h3>VERTICAL SECTION</h3>
                        <h4>Shop Drawing</h4>
                        <p>A vertical section of a two-storey house that contains several bedrooms and a garage..</p>
                        <div className="icons"><a href="#"><i className="ion-social-reddit" /></a>
                        <a href="#"> <i className="ion-social-twitter" /></a>
                        <a href="#"> <i className="ion-social-vimeo" /></a>
                        </div>
                    </figcaption>
                </figure>
                </Card>

                <Card>
                        <figure className="snip15151">
                            <div className="profile-image"><img src="https://i.ibb.co/DQv0P22/2020-04-26-16-02-14.png" alt="sample47" /></div>
                            <figcaption>
                                <h3>Layout</h3>
                                <h4>Site Drawing</h4>
                                <p>A public site that contains several buildings and is a large complex..</p>
                                <div className="icons"><a href="#"><i className="ion-social-reddit" /></a>
                                <a href="#"> <i className="ion-social-twitter" /></a>
                                <a href="#"> <i className="ion-social-vimeo" /></a>
                                </div>
                            </figcaption>
                            </figure>
                </Card>  

        </CardDeck>




    </div>
        );
    }
}
 
export {About};