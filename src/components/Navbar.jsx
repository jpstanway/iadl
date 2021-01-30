import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Mobile from './Mobile';
import logo from '../assets/iadl-logo.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    logo: {
      height: "100px"
    },
    bar: {
      backgroundColor: "#fff"
    },
    title: {
      flexGrow: 1,
    },
    menu: {
      color: "black",
      display: "flex",
    },
    link: {
      marginRight: "20px",
      '&:hover': {
        backgroundColor: "#FF7561",
        color: "#fff"
      }
    },
    "@media screen and (max-width: 800px)": {
      menu: {
        display: "none"
      },
    },
    "@media screen and (max-width: 600px)": {
      logo: {
        height: "50px"
      },
    }
  }),
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>  
          <div className={classes.title}>
            <a href="/">
              <img className={classes.logo} src={logo} alt="iadl-logo" />
            </a>
          </div>
          <div className={classes.menu}>
            <Button color="inherit" className={classes.link} href="#about">About</Button>
            <Button color="inherit" className={classes.link} href="#services">Services</Button>
            <Button color="inherit" className={classes.link} href="#contact">Contact</Button>
          </div>
          <Mobile />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
