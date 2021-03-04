import React from 'react';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: "30px",
      paddingBottom: "20px"
    },
    heading: {
      textAlign: "center"
    },
    headingText: {
      borderBottom: "2px solid #8DB324",
      paddingBottom: "5px"
    },
    paragraphs: {
      fontSize: "20px",
      margin: "50px 0"
    }
  }),
);

const About = () => {
  const classes = useStyles();

  return (
    <div id="about" className={classes.container}>
      <Container maxWidth="md">
        <h2 className={classes.heading}>
          <span className={classes.headingText}>
            About Me
          </span>
        </h2>
        <div className={classes.paragraphs}>
          <p>
            With 17 years of experience as a professional dog groomer, I’ve had the pleasure 
            of working with a variety of dogs with different hairstyles and personalities. 
           </p>
           <p> 
            I groom dogs in a calm, relaxing environment with no dogs waiting on the sidelines. 
            You are welcome to come and view the grooming room, which offers easy drop-off 
            and pick-up for your convenience.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;