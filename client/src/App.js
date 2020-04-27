import React from 'react';
import { Route } from 'react-router-dom';
import {Container} from 'reactstrap';
import {Login, Registration} from "./pages"
import {About} from "./components/Home"
import {Start} from "./components/Start"
import { NavBar } from './components';
import Landing from "./components/Landing/Landing"
import Auth from "./components/Auth/Auth"
import Test from "./components/test/test1"
import { Homen  } from './components';
import { Footer  } from './components';







function App() {
  return (
    <div>
      <Route path='/' component={Start} exact/>
      <Container>
      <NavBar/>
 
       <Route path='/Homen' component={Homen} exact />

      <Route path='/Registration' component={Registration} exact />
      <Route path='/About' component={About} exact />
      <Route path='/Login' component = {Login} exact />
      <Route path='/Auth' component={Auth} exact / >
      <Route path='/Landing' component={Landing} exact/>
      <Route path='/Test' component={Test} exact/>
      <Footer/>
       </Container>

    </div>
    );
}

export default App;
