import React from 'react';

import Cards from './Card'
import Grid from 'material-ui/Grid';
import { Link, Route } from 'react-router-dom';
import './Blog.css'


const  Blog = () =>{
  return (
    <Grid className='blogStyle'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      
    </Grid>


  );
}



export default Blog;