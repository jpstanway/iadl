import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import logo from '../assets/iadl-logo.PNG';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    bar: {
      backgroundColor: "#F7F9F9"
    },
    title: {
      flexGrow: 1,
    },
    menu: {
      color: "black",
      display: "flex",
    },
    link: {
      marginRight: "20px"
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
            <img src={logo} alt="iadl-logo" />
          </div>
          <div className={classes.menu}>
            <Button color="inherit" className={classes.link}>About</Button>
            <Button color="inherit" className={classes.link}>Services</Button>
            <Button color="inherit" className={classes.link}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;