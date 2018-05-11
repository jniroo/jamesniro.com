import React from 'react'
import {
  BrowserRouter as Router,
  Route,Switch,
  Link
} from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import Books from './Books';
import Portfolio from './Portfolio'
import About from './About';

 const Main = () => (
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/Blog" component={Blog}/>
           <Route exact path="/Books" component={Books}/>
           <Route exact path="/Portfolio" component={Portfolio}/>
           <Route exact path="/About" component={About}/>
            </Switch>  

);  


export default Main;