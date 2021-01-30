import React from 'react';
import { Container, Paper, List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      backgroundColor: "#f9f9f9",
      paddingTop: "30px",
      paddingBottom: "50px"
    },
    heading: {
      marginBottom: "50px",
      textAlign: "center"
    },
    headingText: {
      borderBottom: "2px solid #8DB324",
      paddingBottom: "5px"
    },
    services: {
      display: "flex",
      justifyContent: "center"
    },
    card: {
      padding: "20px",
      textAlign: "center",
      transition: "all 0.5s",
      '&:hover': {
        boxShadow: "0px 0px 14px 4px rgba(0,0,0,0.1)",
        transform: "scale(1.05)"
      }
    },
    special: {
      marginTop: "20px"
    }
  }),
);

const Services = () => {
  const classes = useStyles();
  
  return (
    <div id="services" className={classes.container}>
      <Container maxWidth="md">
        <h2 className={classes.heading}>
          <span className={classes.headingText}>
            Services
          </span>
        </h2>
        <div className={classes.services}>
          <Paper variant="outlined" className={classes.card}>
            <h3>Full Package</h3>
            <h2>$45.00</h2>
            <List>
              <ListItem alignItems="center">Grooming</ListItem>
              <ListItem>Bath</ListItem>
              <ListItem>Dry</ListItem>
              <ListItem>Hair cut</ListItem>
              <ListItem>Toenails</ListItem>
              <ListItem>Ears plucked (optional)</ListItem>
              <ListItem>Anal glands released (optional)</ListItem>
              <ListItem className={classes.special}>
                <em>Please note: I accomodate small dogs under 30 lbs only</em>
              </ListItem>
            </List>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default Services;