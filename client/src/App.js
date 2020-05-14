import React from 'react';
import { Route } from 'react-router-dom';
import {Container} from 'reactstrap';
import {Login, Registration} from "./pages"
import {About} from "./components/home"
import {Start} from "./components/start"
import { NavBar } from './components';
import Auth from "./components/auth/auth"
import Test from "./components/test/test1"
import { Homen  } from './components';
import { Footer  } from './components';



function App() {
  return (
    <div>
      <Route path='/' component={Start} exact/>
      <Container>
      <NavBar/>
        <Route path='/homen' component={Homen} exact />
      <Route path='/Registration' component={Registration} exact />
      <Route path='/About' component={About} exact />
      <Route path='/Login' component = {Login} exact />
      <Route path='/Auth' component={Auth} exact / >
      <Route path='/Test' component={Test} exact/>
      <Footer/>
       </Container>

    </div>
    );
}

export default App;
