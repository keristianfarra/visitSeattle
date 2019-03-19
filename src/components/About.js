import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import welcomeToSeattle from './welcomeToSeattle.png';


import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
<div class="container">
<Paper className={classes.root} elevation={1}>
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="About Page"
        className={classes.media}
        height="140"
        image={welcomeToSeattle}
        title="About Us"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">

        </Typography>
        <Typography component="p">
              The purpose of the website is to you find attractions in Seattle and to inform you of the social norms/etiquette of Seattle to make the most out of your visit. 
              <br/>
               We addresses the problem of getting to know a place as a tourist and our goal is to make trip planning easier and visit comfortable.
              </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button variant="contained" size="medium" color="primary">
      Learn More About Seattle
  </Button>
    </CardActions>
  </Card>
</Paper>
</div>

);

}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);