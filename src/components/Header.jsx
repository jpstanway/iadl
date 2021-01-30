import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import homeImage from '../assets/iadl-home.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "900px",
      width: "100%"
    },
    imageContainer: {
      backgroundImage: `url(${homeImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "100%",
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
      transform: "translate(-50%, -50%)",
      zIndex: "9999"
    },
    "@media screen and (max-width: 800px)": {
      text: {
        left: "50%",
        maxWidth: "400px",
        padding: "20px",
        textAlign: "center"
      }
    },
    "@media screen and (max-width: 400px)": {
      text: {
        fontSize: "32px"
      }
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <div className={classes.overlay}></div>    
        <h1 className={classes.text}>
          Professional dog grooming since 2004.
        </h1>
      </div>
    </div>
  );
};

export default Header;