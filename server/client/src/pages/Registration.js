import React, { Component } from 'react';
import API from "./utils/API";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'



import "./Registration.css";
 
class Registration extends Component {
    
    constructor(proos) {
    
        super (proos);
   
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
            start:""
                       
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
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

        axios.post("/api/v1/register" ,
         {
                "name" : this.state.name,
                "email" :  this.state.email,
                "password" :  this.state.password
        },

        ).then(response => {
            console.log("200 sec",response )

            if (response.data == `Email address (${this.state.email}) is already taken`)
            this.setState({
                error : response.data ,
            }) 

            if (response.data != `Email address (${this.state.email}) is already taken` )
            this.setState({
              start : "Successfully Registered! Thank you for being part of or family" ,
          }) 

        })
       
        .catch(error => {
              console.log("errrrr",error );
        });
        console.log ("submend");
        console.log (this.state.name);

    }
    

    render() { 
        return (
            (<div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                 <form className="one" onSubmit = {this.handleSubmit}>
                     {/* <input type="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
                     <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                     <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />

                     <button type = "submit"> REG </button> 
                     <br/>
                     <p style={{color: 'blue'}}> {this.state.error} </p>

                     <br/>
                 </form> */}


                    {/* <header className="logo"> JD </header> */}
          <div className="segment">
            <h1 className="one" >Sing up</h1>
            {/* <p style={{color: 'blue'}}> {this.state.error} </p> */}
            <Alert style={{color: '#50E3C2'}} > {this.state.error} </Alert>
            <Alert style={{color: '#50E3C2'}} > {this.state.start} </Alert>


          </div> 


           <label> 
           <input type="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
          </label>

          <label>
             <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
          </label>

          <label>
               <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
          </label>

          <button className="red" type="submit"> <i className="fa fa-lock" aria-hidden="true" />
            Log in</button>
          <div className="segment">
            <button className="unit" type="button">

              <i className="fa fa-arrow-left" aria-hidden="true" />
            </button>



            <button className="unit" type="button">
              <i className="fa fa-bookmark" aria-hidden="true" />
            </button>
            <button className="unit" type="button">
              <i className="fa fa-cog" aria-hidden="true" />
            </button>
          </div>
         
          <small><a href="/Login" className="form-text text-muted">I have an account!</a></small>

        </form>

                   <div>


              </div>


              

            </div>)
           
        );
    }
}
 
export  {Registration};