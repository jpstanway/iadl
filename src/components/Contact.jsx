import React from 'react';
import { Container, List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
      container: {
        paddingTop: "30px",
        paddingBottom: "20px"
      },
      heading: {
        textAlign: "center"
      },
      list: {
        margin: "auto",
        width: "300px"
      },
      theme
    }),
);

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <h2 className={classes.heading}>Contact</h2>
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