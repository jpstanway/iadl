import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import homeImage from '../assets/iadl-home.jpg';

const useStyles = makeStyles((theme) =>
  createStyles({
    imageContainer: {
      backgroundImage: `url(${homeImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "900px",
      width: "100%",
      position: "relative"
    },
    overlay: {
      backgroundColor: "#000",
      opacity: "0.2",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "999"
    },
    text: {
      color: "#fff",
      fontSize: "50px",
      margin: "0",
      width: "350px",
      position: "absolute",
      top: "50%",
      left: "25%",
      transform: "translate(-50%, -50%)"
    }
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.imageContainer}>
      <div className={classes.overlay}></div>    
      <h1 className={classes.text}>
        Professional dog grooming since 2004.
      </h1>
    </div>
  );
};

export default Header;