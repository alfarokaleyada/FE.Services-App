import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Container, Row, Col } from 'reactstrap';
import {getJwt} from '../components/Auth/Helpers'

import axios from 'axios';




import "./Login.css";
import { JsonWebTokenError } from 'jsonwebtoken';
 
class Login extends Component {



    constructor(proos) {
    
        super (proos);
   
        this.state = {
            loged: "",
            email: "",
            password: "",
            errorLogin: "",
            data : ""
                       
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }



    componentDidMount (){
        const jwt  = getJwt();
        if(!jwt) {
            localStorage.removeItem('cool-jwt');

            console.log("!jwt")
        }
        axios.get("/api/v1/arch" , {headers : {Authorization : `Bearer ${jwt}` }})
        .then(res => {this.setState
            (
                {user:res.data }
            )
            console.log(this.user)
            this.props.history.push("/Auth")
            
        })
            
            
            .catch (err => {
                localStorage.removeItem('cool-jwt');
                console.log("error")

            });
            console.log("jwt")
        
    }


    handelSuccessfulAuth(){
        this.history.push('/dashrpod')
    }


    handleChange(event){
        console.log ("handleChange"); 
        this.setState({
            [event.target.name] : event.target.value
        })    

        event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();
       
        axios.post("/api/v1/login" ,
         {
                "email" :  this.state.email,
                "password" :  this.state.password
        },

        ).then(response => {
            if (response.status === 200 )
        {
                            localStorage.setItem('cool-jwt', response.data.token);
                            this.props.history.push("/Auth")
                        }


            this.setState({
                loged : this.state.email
                
            }) 
            console.log("response.status === 200 ",response )
        })
        
        .catch(error => {
              console.log("reg errrrrrrrrrrr",error );
        });

    }



    handleSubmitOut(event) {
        event.preventDefault();
        // const {
        //     name,
        //     email,
        //     password,
        // } = this.state


        // Send a POST request
            // axios({
            //     method: 'post',
            //     url: 'api/v1/register',
            //     data: {
            //         name : name,
            //         email : email,
            //         passwrod : password
            //     }
            // });

        axios.delete("/api/v1/logout" ,
         {
              
        },

        ).then(response => {
            if (response.status === 200 )
            this.setState({
                loged : this.state.email
            }) 
            console.log("response.status === 200 ",response )
            

        })

        
        .catch(error => {
              console.log("reg errrrrrrrrrrr",error );
        });

    }



    render() { 
        return (
            <div>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700" rel="stylesheet" />
                    <div className="super-containerLog">
                    <div className="left-content-containerLog">
                        <div className="quote">
                        <p>
                            “ Reality must be more beautiful, honest and clear than   <span>imagination</span>. ”
                        </p>
                        </div>
                                               
                            <div className="content">
                            <p>


                              <br/>
                           <br/>
                              <button>Login</button>
                              
                                    Hello {this.state.loged}
                            </p>
                            <form onSubmit = {this.handleSubmit}>
                                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />

                                <button type = "submit"> logIn </button> 
                                <br/>
                                <p style={{color: 'blue'}}> {this.state.loged} </p>
                                <p style={{color: 'blue'}}> {this.state.data} </p>


                                <br/>
                                
                            </form>
                            <button type = "submit" onSubmit = {this.handleSubmitOut}> logout </button> 

                                                            
                            </div>
                        <div className="learn-more">
                            
                        <a href="#">Login</a>
                        </div>
                        
                        <div className="learn-more">
                        <a href="#">Sign Up</a>
                        </div>


                    </div>
                    </div>
            </div>
        
           
        );

       
    }
}
 
export  {Login};