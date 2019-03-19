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
import CommunityDiscussion from './CommunityDiscussion.png';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

/*const styles = {
  card: {
    maxWidth: '18rem',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Community Discussion Page"
          className={classes.media}
          height="140"
          image={CommunityDiscussion}
          title="Community Discussion"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography component="p">
          There’s a good place underneath the 5th avenue theater called “Umma’s Lunchbox”. Construction is happening there right now, so you can also get in from the Hilton. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained"size="medium" color="primary">
          Ask a Question
        </Button>
        <Button variant="contained"size="medium" color="primary">
          Answer a Question 
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}; 
 
export default withStyles(styles)(ImgMediaCard);*/

/* import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; */
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

    <div class="container" >
      <Paper className={classes.root} elevation={1}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Community Discussion Page"
              className={classes.media}
              height="140"
              image={CommunityDiscussion}
              title="Community Discussion"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">

              </Typography>
              <Typography component="p">
                Question: Where can I get authentic Korean food? <br /><br />

                Answer: There’s a good place underneath the 5th avenue theater called
                “Umma’s Lunchbox”. Construction is happening there right now,
                so you can also get in from the Hilton.

                <br /><br /><br />
                Question: What's the public transit situation like? Do the buses run on time?
              <br /><br />
                Answer: They're efficient for the most part! Seattle has a large bus system that covers most of the city.
                <br /> <br /><br />
              </Typography>
              <TextField
                id="outlined-textarea"
                label="Ask Seattle:"
                placeholder="Have a comment?"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <br /><br />
              <Button variant="contained" color="primary" className={classes.button} component={Link} to="">
                Submit Comment
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>

    </div >

  );

}



PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

