import React from 'react';
import {getJwt} from './helpers'

import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./items.css";

const Items = (props) => {


	return props.items.test.map((item) => {
		return (









// 			<div className="col-lg-12 cardSpace" key={item._id}>



// {/* 
//                         <form onClick={(event) => props.updateItem(item._id,   event)}>
//                                 <input type="email" name="email" placeholder="Email"  />
                                                            
//                                     <br/>
//                             <br/>
//                         </form> */}


// 				<Card>
// 					<p>{item._id}</p>
//                     <p>{item.name}</p>
// 					<p>{item.profileImg}</p>
//                     <p>{item.created}</p>
//                     <p>{item.place}</p>

//                     <CardImg className="col-lg-6 cardSpace imgPic" alt={item.item} src={item.profileImg} />


//                    <form className="form">
//                     <input
//                         name="name"
//                         onChange={props.handleInputChange}
//                         type="text"
//                         placeholder={item.name} />
//                     <input
//                         name="place"
//                         onChange={props.handleInputChange}
//                         type="text"
//                         placeholder="place" />
                   
//                         <button type = "button" 
//                          onClick={(event) => props.updateItem(item._id, event)}> Send </button>   
//                         </form>
// {/*                    </form>
//                     <form >
//                                 <input  name="name" type="text"  />                 
//                                 <button type = "button" 
//                                 onClick={(event) => props.updateItem(item._id, item.name ,  event)}> Send </button>                                                       
//                     </form> */}


//                     {/* <input  name="titleInput" type="text" onClick={(event) => props.updateItem(item._id, " test rom" ,  event)} /> */}


//                         <Button
// 							className="btn-space"
// 							color="primary"
//                             size="lg"
// 							onClick={(event) => props.updateItem(item._id, " test 2 from" ,  event)}
// 						>
// 							+
// 						</Button>
						
// 						<Button
// 							className="btn-space"
// 							color="danger"
// 							size="lg"
// 							onClick={(event) => props.deleteItem(item._id,  event)}
// 						>
// 							D
// 						</Button>
// 				</Card>
                     
<div>
<br/>
<br/>

        <Card className="col-lg-9 offset-md-1">                                               
            <figure className="container col-lg-7  snip1268">                          
                <div className="image">
                    <CardImg className="col-lg-12" alt={item.item} src={item.profileImg} />
                    <div className="icons">
                        <a href="#"><i className="ion-star" /></a>
                        <a href="#"> <i className="ion-share" /></a>
                        <a href="#"> <i className="ion-search" /></a>
                    </div>
                            <a href="#" className="add-to-cart">In process</a>
                </div>
                    <figcaption>
                            <p>ID: {item._id}</p>
                            {/* <p>{item.name}</p> */}
                            {/* <p>{item.profileImg}</p>
                            <p>{item.created}</p>
                            <p>{item.place}</p> */}
                        <h2>project name</h2>
                        <input
                        className="inputA" name="name" onChange={props.handleInputChange} type="text" placeholder={item.name} />       
                        <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
                        
                        
                        <h2>place</h2>
                        <input className="inputA" name="place"   onChange={props.handleInputChange} type="text" placeholder={item.place} />
                        <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
                        
                        <h2>Area</h2>
                        <input  className="inputA" name="area" onChange={props.handleInputChange}  type="text" placeholder={item.area} />
                        <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>

                        <h2>description</h2>
                        <input  className="inputA" name="description"  type="textarea" placeholder={item.description}  onChange={props.handleInputChange} />
                        <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
                        <div className="price">{item.created}</div>

                        
                        <Button className="btn-space" color="primary" size="lg"
                        onClick={(event) => props.updateItem(item._id,    event)}
                        >Update</Button>
                                    <br/>
                                    <br/>

                        <Button className="btn-space" color="danger" size="lg"
                        onClick={(event) => props.deleteItem(item._id,  event)}
                        > Delete </Button>
                        
                    </figcaption>
                    </figure>

            </Card>
{/* 
       <figure className="snip1268">
          <div className="image">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg" alt="sq-sample4" />
            <div className="icons">
              <a href="#"><i className="ion-star" /></a>
              <a href="#"> <i className="ion-share" /></a>
              <a href="#"> <i className="ion-search" /></a>
            </div>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <figcaption>
          <h2>Denim Shirt</h2>
            <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
            <div className="price">$65.00 </div>
            <h2>Denim Shirt</h2>
            <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
            <div className="price">$65.00 </div>
            <h2>Denim Shirt</h2>
            <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
            <div className="price">$65.00 </div>
          </figcaption>
        </figure> */}


        {/* <figure className="snip1268 hover">
          <div className="image">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" alt="sq-sample17" />
            <div className="icons">
              <a href="#"><i className="ion-star" /></a>
            </div>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <figcaption>
            <h2>Winter Clothes</h2>
            <p>If something is so complicated that you can't explain it in 10 seconds, then it's probably not worth knowing anyway.</p>
            <div className="price">$75.00 </div>
          </figcaption>
        </figure>
        <figure className="snip1268">
          <div className="image">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample15.jpg" alt="sq-sample15" />
            <div className="icons">
              <a href="#"><i className="ion-star" /></a>
              <a href="#"> <i className="ion-share" /></a>
              <a href="#"> <i className="ion-search" /></a>
            </div>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <figcaption>
            <h2>Footwear</h2>
            <p>Miss Wormwood: What state do you live in? Calvin: Denial. Miss Wormwood: I don't suppose I can argue with that!</p>
            <div className="price">$195.00 </div>
          </figcaption>
        </figure> */}
		</div>

		);
	});
};

export default Items;
