import React from 'react';
import Divider from 'material-ui/Divider';
import Cards from './Card'
import Grid from 'material-ui/Grid';
import './Home.css'
import Books from './Books'
import Blog from './Blog'
import Portfolio from './Portfolio'


 const Home = (props) => (
      <Grid>
      <h1 className='top'> Latest Post</h1>
      <div className='home'>
      	<Cards/>
      	<Cards/>
      	<Cards/>
      	<Cards/>
      	</div>
      	<Divider/>
      	 <h1 className='next'> Bookshelf</h1>
      	 <div className='home'>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       </div>
       <Divider/>
        <h1 className='bottom'> Latest Projects</h1>
        <div className='home'>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       < /div>
       <div className='bottomSection'></div>
      </Grid>
    );


export default Home;