import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "none",
      height: "40px"
    },
    button: {
      '&:hover': {
        backgroundColor: "#FF7561",
        color: "#fff"
      }
    },
    menu: {
      width: "200px"
    },
    hamburger: {
      backgroundColor: "#1f1f1f",
      borderRadius: "4px",
      height: "2px",
      width: "40px",
      position: "relative",
      "&::after": {
        content: '""',
        backgroundColor: "#1f1f1f",
        borderRadius: "4px",
        height: "2px",
        width: "40px",
        position: "absolute",
        left: "0",
        top: "10px"
      },
      "&::before": {
        content: '""',
        backgroundColor: "#1f1f1f",
        borderRadius: "4px",
        height: "2px",
        width: "4px",
        position: "absolute",
        left: "0",
        top: "-10px"
      }
    },
    link: {
      borderRadius: "0",
      width: "100%",
      '&:hover': {
        backgroundColor: "#FF7561",
        color: "#fff"
      }
    },
    "@media screen and (max-width: 800px)": {
      container: {
        display: "block"
      },
    },
  }),
);

const Mobile = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <Button 
        className={classes.button} 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
      >
        <span className={classes.hamburger}>&nbsp;</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <Button color="inherit" className={classes.link} href="#about" onClick={handleClose}>About</Button>
        <Button color="inherit" className={classes.link} href="#services" onClick={handleClose}>Services</Button>
        <Button color="inherit" className={classes.link} href="#contact" onClick={handleClose}>Contact</Button>
      </Menu>
    </div>
  );
};

export default Mobile;
