import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
      theme,
      container: {
        backgroundColor: "#f9f9f9",
        padding: "20px"
      },
      copyright: {
        textAlign: "center"
      }
    }),
);

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.container}>
      <p className={classes.copyright}>
        &copy; {currentYear} It's A Dawg's Life. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;