import React, { Component } from 'react';
import axios from 'axios';
import {getJwt} from './Helpers'
import { withRouter } from 'react-router-dom'

 import "./Auth.css";

class Auth extends Component {


    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user1 :undefined,
            profileImg: ''
            }   
        }


        onFileChange(e) {
            this.setState({ profileImg: e.target.files[0] })
        }

   


    
    onSubmit(e) {
        e.preventDefault()
        const jwt  = getJwt();
     

        // const formData = new FormData()
        // formData.append('profileImg', this.state.profileImg)
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        formData.append('name', "Farok Test")
        formData.append('created', 11-24-2019)



        console.log(this.state.profileImg)
        axios.post("/api/v1/arch",  formData,
        //  {
        
        //     name: "test from aiozs",
        //     created: "11-24-2019"
        //     },

        { headers : 
        {
            Authorization : `Bearer ${jwt}`}
        },
       
        console.log( "Authorization")

        ).then(response => {
            console.log(response)
           this.props.history.push("/Login")

        })


        .catch (err => {
            localStorage.removeItem('cool-jwt');
            console.log(err)
       
        })
    }







    componentDidMount (){
        const jwt  = getJwt();
        if(!jwt) {
            localStorage.removeItem('cool-jwt');
            console.log("!jwt")

        }

        axios.get("/api/v1/arch" ,
         {headers : 
            {Authorization : `Bearer ${jwt}` }
        })
        .then(res => {this.setState
            (
                {name:res.data.arch[0].name,
                created:res.data.arch[0].created,
                profileImg:res.data.arch[0].profileImg
               
                }
            )
            console.log(res.data)

        })

            
            .catch (err => {
                // localStorage.removeItem('cool-jwt');
                console.log("error")
            });
        
    }




    render() { 
        if(this.state.user = undefined) {
        return (
            <div><h1>Loading</h1></div>
        );
        }



        return (
            <div>
                            <div className="header">
                            <div className="clipped">
                                <h1 id="title">Title</h1>
                            </div>
                            </div>
                            <content>
                            <h2>This is a subtitle</h2>
                            <hr />
                            <p>Since a previous update of Google Chrome, this effect is not working anymore like before. I used 'text-fill-color' together with 'background-clip'. Now I changed it to 'mix-blend-mode'. This is alot easier in my opinion. You can still find the "old" version commented out in the CSS.</p>
                            </content>
                            <div classname="upload">
                            <input name="titleInput" type="text" placeholder="Enter title" />
                             <input  name="titleInput" type="file" onChange={this.onFileChange} />
                              <input name="titleInput" type="text" placeholder="Enter area" />
                               <input name="titleInput" type="text" placeholder="Enter place" />
                                <input name="titleInput" type="text" placeholder="Enter description" />
                            <button id="uploadButton">
                                Upload image
                            </button>
                            <input id="uploadFile" type="file" name="image" className="img" defaultalue="Upload image" />


                                            
                                             Auth  {this.props.children}
                                             Hello {this.state.name}
                                            {/* Hello {this.state.profileImg} */}
                                            <img src={this.state.profileImg} />

                                            created {this.state.created}

                                        <form onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                {/* <input type="file" onChange={this.onFileChange} /> */}
                                            </div>
                                            <div className="form-group" >
                                                <button className="uploadButton" type="submit">Upload</button>
                                            </div>
                                        </form>
                             </div>




      <div className="container h-100vh">

   <div className="row row h-100 align-items-center justify-content-centerr">
          <div className="col align-self-cente ">
            <div className="card">
              <div className="card-header text-center display-4">
                Add new project
              </div>
              <div className="card-body">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="middleName">Middle Name</label>
                      <input type="text" className="form-control" id="middleName" placeholder="Middle Name" />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="Sername">Sername</label>
                      <input type="text" className="form-control" id="Sername" placeholder="Sername" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Year</label>
                      <select id="yeardropdown" className="form-control">
                        <option selected>Year...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Month</label>
                      <select id="monthdropdown" className="form-control">
                        <option selected>Month...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Day</label>
                      <select id="daydropdown" className="form-control">
                        <option selected>Day...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Password</label>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Country</label>
                      <select id="country" className="form-control">
                        <option selected>Country...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">State</label>
                      <select id="state" className="form-control">
                        <option selected>State...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="phonenumber">Phone Number</label>
                      <input type="number" className="form-control" id="phonenumber" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <small><a href="https://codepen.io/MKAbuMattar/pen/RwwMEVY" className="form-text text-muted">I have an account!</a></small>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>























{/* 

                                   <div className="blog-card spring-fever">
        <div className="title-content">
          <h3><a href="#">10 inspiring photos</a></h3>
          <div className="intro"> <a href="#">Inspiration</a> </div>
        </div>
        <div className="card-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
          <a href="#">Read Article<span className="licon icon-arr icon-black" /></a>
        </div>
        <div className="utility-info">
          <ul className="utility-list">
            <li><span className="licon icon-like" /><a href="#">2</a></li>
            <li><span className="licon icon-com" /><a href="#">12</a></li>
            <li><span className="licon icon-dat" />03 jun 2017</li>
            <li><span className="licon icon-tag" /><a href="#">Photos</a>, <a href="#">Nice</a></li>
          </ul>
        </div>
        <div className="gradient-overlay" />
        <div className="color-overlay" />
      </div>{/* /.blog-card */}

                              */}

            </div>   
      );
    }
}
 
export default withRouter(Auth);