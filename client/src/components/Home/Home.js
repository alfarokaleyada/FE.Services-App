import React, { Component } from 'react';
import "./home.css";


class Home extends Component {
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
                <a href="https://en.wikipedia.org/wiki/Elon_Musk">Get Started FE Designer!!</a>
                </div>
            </div>
            </div>
    </div>
        );
    }
}
 
export {Home};