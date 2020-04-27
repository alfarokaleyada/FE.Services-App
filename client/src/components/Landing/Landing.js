import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
 

    class Landing extends Component {

        constructor(props) {
            super(props);
       
    
        this.state={
            user: {},

                        }   
            
        }



        componentDidMount (){

            axios.get("/api/v1/arch")
                   .then(res => {this.setState
                (
                    {user:res.data }
                )
                console.log(this.user)
            })
              
           .catch(error => {
                 console.log("reg errrrrrrrrrrr",error );
                });
    
        }

       

            render() {  
                return (
                <div>
                    Hello {this.state.name}
 
                 </div>
           );

       
        }
    }
     
export default Landing;