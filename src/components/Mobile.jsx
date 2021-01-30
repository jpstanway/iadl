import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "none"
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
        Menu
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
