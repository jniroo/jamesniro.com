import React, { Component } from 'react';

import Home from './Components/Home'
import Blog from './Components/Blog'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Books from './Components/Books'
import Main from './Components/myRouter'

class App extends Component {
 
  render() {
    return (
      <div>
      	<header>
      		<NavBar></NavBar>
      	</header>

     		<Main></Main>

            <Footer></Footer>  
      </div>
    );
  }
}

export default App;
