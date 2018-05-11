import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './NavStyles';
import Home from './Home';
import Blog from './Blog';
import Books from './Books';
import Portfolio from './Portfolio'
import About from './About';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from 'material-ui/Button';
import Media from "react-media";


class NavBar extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (

      <div className={classes.drawerHeader}>
        <div className={classes.toolbar} />
        <Divider />
         <Button variant="raised"  className={classes.button}>
         <Link to="/" className={classes.link}>Home</Link>
        </Button>
        <Divider />
       <Button variant="raised" className={classes.button}>
        <Link to="/Blog" className={classes.link}>Blog</Link>
      </Button>
       <Divider />
        <Button variant="raised" className={classes.button}>
        <Link to="/Books" className={classes.link}>Books</Link>
      </Button>
      <Divider />

      <Button variant="raised" className={classes.button}>
        <Link to="/Portfolio" className={classes.link}>Portfolio</Link>
      </Button>
        <Divider />
       <Button variant="raised"  className={classes.button}>
        <Link to="/About" className={classes.link}>About</Link>
      </Button>


      </div>
    );

    return (
      <div className={classes.root} >
        <AppBar className={classes.appBar} className={classes.navBarColor} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
            < Link  to="/" className={classes.link}>
              James Niroomand

              </Link>
              </Typography>

               <Media query="(min-width: 960px)">
              <div className ={classes.row}>
              <Button variant="raised" className={classes.button}>
        <Link to="/Blog" className={classes.link}>Blog</Link>
      </Button>
       <Divider />
        <Button variant="raised" className={classes.button}>
        <Link to="/Books" className={classes.link}>Books</Link>
      </Button>
      <Divider />

      <Button variant="raised" className={classes.button}>
        <Link to="/Portfolio" className={classes.link}>Portfolio</Link>
      </Button>
        <Divider />
       <Button variant="raised"  className={classes.button}>
        <Link to="/About" className={classes.link}>About</Link>
      </Button>
      </div>
       </Media>
            
          </Toolbar>
        </AppBar>

        <Hidden mdUp>

          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
         
          >
            {drawer}
          </Drawer>
        </Hidden>
      

      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);

