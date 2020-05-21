import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Goals() {

  const classes = useStyles();
  return (
        <div className="goals">
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container direction="row" justify="center" spacing={3}>
        <Grid item md={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Aware"
        />
        <CardContent>
          <Typography gutterBottom variant="title" align="center" component="h2">
            AWARE
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" component="p">
          We aim at spreading awareness about the advantages of using Open source softwares over conventional proprietary softwares
          </Typography>
        </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
        <Grid item md={4}>
        <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="title" align="center" component="h2">
          ADOPT
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
        Spreading awareness is futile until and unless we motivate people to adopt the prevailing open source softwares in their work environment
          </Typography>
         </CardContent>
        </CardActionArea>
        
        </Card>
        </Grid>
        <Grid item md={4}>
        <Card className={classes.root}>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image="https://source.unsplash.com/random"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="title" align="center" component="h2">
        CONTRIBUTE
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
        The whole concept of open source revolves around community which uses it and contributing to the community is always a matter of prestige
          </Typography>
        </CardContent>
        </CardActionArea>
    
        </Card>
        </Grid>
    </Grid>
            </Container>
        </div>
    
  )
}