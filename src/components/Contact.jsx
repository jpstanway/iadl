import React from 'react';
import { Container, List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
      container: {
        paddingTop: "30px",
        paddingBottom: "50px"
      },
      heading: {
        textAlign: "center"
      },
      headingText: {
        borderBottom: "2px solid #8DB324",
        paddingBottom: "5px"
      },
      list: {
        fontSize: "18px",
        margin: "auto",
        width: "300px"
      },
    }),
);

const Contact = () => {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.container}>
      <Container maxWidth="md">
        <h2 className={classes.heading}>
          <span className={classes.headingText}>
            Contact
          </span>
        </h2>
        <List className={classes.list}>
          <ListItem><strong>Book an appointment</strong></ListItem>
          <ListItem>(778) 899-4385</ListItem>
          <ListItem>lsstanway@gmail.com</ListItem>
          <ListItem>Kamloops, BC</ListItem>
        </List>
      </Container>
    </div>
  );
};

export default Contact;