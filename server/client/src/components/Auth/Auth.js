import React, { Component } from 'react';
import axios from 'axios';
import {getJwt} from './Helpers'
import { withRouter , Redirect } from 'react-router-dom'
import Items from './Items';
import "./Auth.css";

import { history } from 'history';

import { Button, CardGroup ,CardDeck, Card} from 'react-bootstrap';


class Auth extends Component {

    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.handleChange = this.handleInputChange.bind(this);

        // set states
        this.state = {
            user1 :undefined,
            profileImg: '',
            name: "",
            test: [],
            nameFromForm: "",
            area: "",
            hight: "",
            Day: "",
            description: "",
            place: "",

            }   
        }

 
        // handleInputChange
        handleInputChange = event => {
          // Getting the value and name of the input which triggered the change
          const { name,place, value } = event.target;
      
          // Updating the input's state
          this.setState({
            [name]: value,
            [place]: value,
            

          });
        };
   
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
        formData.append('name', this.state.name)
        formData.append('created', Date.now())
        formData.append('place', this.state.place)
        formData.append('description', this.state.description)
        formData.append('area', this.state.area)
        formData.append('day', this.state.day)
        formData.append('hight', this.state.hight)




        console.log(this.state.profileImg)
        axios.post("/api/v1/arch",  formData,
        //   {
        //   name : this.state.name,
        // //     created: "11-24-2019"
        //   },
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
            console.log(err)       
        })
    }

        //deletes function
        deleteItem= (id) => {
          const jwt  = getJwt();
          const data = {
            arch_id: id
          };
          // console.log("working data one")
          // ItemsAPI.deleteItem(data)
          axios.delete("/api/v1/arch/" + data.arch_id, { headers : 
            {
                Authorization : `Bearer ${jwt}`}
            },)
          .then(this.componentDidMount ())
          .catch((err) => console.log(err));
        };
        
        // update function 
        updateItem= (id , newName, newPlace) => {
          const jwt  = getJwt();
          newName = this.state.name
          newPlace = this.state.place
          const data = {
            arch_id: id,
            name : newName,
            place : newPlace
          };

        // console.log("working data one")
        // ItemsAPI.deleteItem(data)
        axios.put("/api/v1/arch/" + data.arch_id, data ,{ headers : 
          {
              Authorization : `Bearer ${jwt}`}
          },)
        .then(this.componentDidMount ())
        .catch((err) => console.log(err));
      };

    // get from db
    componentDidMount (){
        const jwt  = getJwt();
        if(!jwt) {
            localStorage.removeItem('cool-jwt');
        }
        axios.get("/api/v1/arch" ,
         {headers : 
            {Authorization : `Bearer ${jwt}` }
        })
        .then(res => {this.setState
            (
                {
                // name:res.data.arch[0].name,
                // created:res.data.arch[0].created,
                // profileImg:res.data.arch[0].profileImg
                test:res.data.arch
                })
    })

            
            .catch (err => {
                // localStorage.removeItem('cool-jwt');
                console.log("error")
            });
       
    }

    logout(e) { 
      localStorage.removeItem('cool-jwt');
      window.location.href = '/Login';
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
              <button  className="uploadButton" type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.logout}>Logout</button>                                                                       
                <div className="clipped">
                    <h1 id="title"> Welcome  {this.state.test.name}</h1>
                </div>
              </div>
                <content>
                    <h2>We offer the best service             </h2>
                      <hr />
                        <p>After sending the project to us, we will do the service for free and try to provide our solutions for a maximum of one week</p>

                          <div className="container h-100vh">
                            <div className="row row h-100 align-items-center justify-content-centerr">
                                    <div className="col align-self-cente ">
                                      <div className="card">
                                        <div className="card-header text-center display-4">
                                          Add New Project!
                                        </div>
                                        <div className="card-body">
                                          <form onSubmit={this.onSubmit}>
                                                  <div className="form-row">
                                                    <div className="form-group col-md-5">
                                                      <label htmlFor="firstName">project name</label>
                                                    <input value={this.state.name} name="name"  className="form-control" onChange={this.handleInputChange}
                                                    type="text" placeholder="Upgrade kitchen design..."/>                                            
                                                    </div>

                                                    <div className="form-group col-md-5">
                                                      <label htmlFor="Sername">place</label>
                                                      <input value={this.state.place} name="place" type="text" className="form-control" id="Sername" placeholder="home, office ..etc" onChange={this.handleInputChange}/>
                                                    </div>

                                                    <div className="form-group col-md-2">
                                                      <label htmlFor="middleName">add image</label>
                                                      <input  name="titleInput" type="file" className="form-control" onChange={this.onFileChange} />
                                                    </div>

                                                  </div>
                                                  <div className="form-row">
                                                    <div className="form-group col-md-4">
                                                      <label htmlFor="inputState">area</label>
                                                      <select  value={this.state.area} name="area" id="yeardropdown" className="form-control" onChange={this.handleInputChange}>
                                                        <option selected>between...</option>
                                                        <option value="25-50">25-50</option>
                                                        <option value="50-100">50-100</option>
                                                        <option value="100-200">100-200</option>
                                                        <option value="200- ...">200- ...</option>
                                                      </select>
                                                    </div>
                                                

                                                    <div className="form-group col-md-4">
                                                      <label htmlFor="inputState">hight</label>
                                                      <select name="hight" id="monthdropdown" className="form-control">
                                                        <option selected>hight...</option>
                                                        <option value="3 - 6">3 - 6</option>
                                                        <option value="6 - ...">6 - ...</option>
                                                      </select>
                                                    </div>
                                                    
                                                    <div className="form-group col-md-4">
                                                      <label htmlFor="inputState">Day</label>
                                                      <select name="Day"  id="daydropdown" className="form-control">
                                                        <option selected>Day...</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                      </select>
                                                    </div>
                                                  </div>
                                                  <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                      <label htmlFor="inputEmail4">description</label>
                                                      <input value={this.state.description}  type="textarea" name="description" className="form-control" id="inputEmail4" placeholder="I would like to chang...."onChange={this.handleInputChange} />
                                                    </div>
                                                 </div>                                                                                    
                                                  <button  className="uploadButton" type="submit" className="btn btn-primary btn-lg btn-block">Upload</button>                                                                                 
                                                </form>
                                                                                                                                          
                                                  <Items
                                                      items={this.state}
                                                      deleteItem={this.deleteItem}
                                                      updateItem={this.updateItem}
                                                      handleInputChange={this.handleInputChange}
                                                    />

                                              </div>                                                                                          
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </content>                  

                                        {/* <form onSubmit={this.onSubmit}>
                                          <input
                                              value={this.state.name}
                                              name="name"
                                              onChange={this.handleInputChange}
                                              type="text"
                                              placeholder="name"
                                            />
                                            <input  name="titleInput" type="file" onChange={this.onFileChange} />
                                            <div className="form-group">
                                            </div>
                                              <div className="form-group" >
                                                <button className="uploadButton" type="submit">Upload</button>
                                            </div>                                        
                                        </form>                               */}

                             {/* <Items
                                items={this.state}
                                deleteItem={this.deleteItem}
                                updateItem={this.updateItem}
                                handleInputChange={this.handleInputChange}
                                // formName ={this.getName}
                              /> */}

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

                          

                              

            </div>   
      );
    }
}
 
export default withRouter(Auth);