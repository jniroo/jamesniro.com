import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Cards from './Card'
import './Books.css'

const  Books = () =>{
  return (
    <Grid className='books'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      
    </Grid>


  );
}

export default Books;