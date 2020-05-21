import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="about">
        
      <Container maxWidth="lg">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              About
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Our Mission
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Shaping the future of Academia & Industry with Open Source practices
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Vision
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              To promote and protect Open Source software
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              To enrich the education sector with innovative ideas
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              To provide solutions for the betterment of the society
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Values
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              To educate the nation about open source development with various technical activities
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              To provide a platform that minimizes the gap between academy and industry
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              To enhance extraneous growth of the country through Open Source technologies
            </Typography>
          </Container>
      </div>
    </React.Fragment>
  );
}
