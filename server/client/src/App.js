import React from 'react';
import { Route } from 'react-router-dom';
import {Container} from 'reactstrap';
import {Login, Registration} from "./pages"
import {Home} from "./components/Home"
import {Start} from "./components/Start"
import { NavBar } from './components';
import Landing from "./components/Landing/Landing"
import Auth from "./components/Auth/Auth"
import Test from "./components/test/test1"



function App() {
  return (
    <div>
      <Route path='/' component={Start} exact/>

      <Container>
      <NavBar/>
      </Container>
      <Route path='/Registration' component={Registration} exact />
      <Route path='/Home' component={Home} exact />
      <Route path='/Login' component = {Login} exact />
      <Route path='/Auth' component={Auth} exact / >
      <Route path='/Landing' component={Landing} exact/>
       <Route path='/Test' component={Test} exact/>

    </div>
    );
}

export default App;
