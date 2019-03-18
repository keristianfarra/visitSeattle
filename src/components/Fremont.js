// import React from 'react';

import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

//Images for Fremont page
import FremontTrollLandmarkFinal from './FremontTrollLandmarkFinal.jpg';
import FremontLeninStatue from './FremontLeninStatue.jpg';
import FremontPublicMarket from './FremontPublicMarket.jpg';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },

    card: {
        display: 'block',
        textAlign: 'center',
        fontfamily: 'Roboto'
    },
});

function PaperSheet(props) {
    const { classes } = props;

    //Title card for the landmark page (need to change it to Alki title card)
    return (
        <div class="container">
            {/* <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="Image of the Space Needle"
                        className={classes.media}
                        height="140"
                        image={LandmarksBanner}
                        title="Landmarks in Seattle"
                    />
                </Card>
            </Paper> */}
            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <Typography component="h1">
                            Fremont
                        </Typography>
                        <CardMedia
                            component="img"
                            alt="Fremont Troll"
                            className={classes.media}
                            height="140"
                            image={FremontTrollLandmarkFinal}
                            title="Fremont Troll"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Fremont Troll
                            </Typography>
                            <Typography component="p">
                                <br />A public sculpture underneath a bridge of <br />
                                a troll holding a car. This is a great place <br />
                                to take a selfie!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/FremontTroll">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to the Fremont Troll 
                    </Button>
                    </Link>
                    </CardActions>  
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Lenin Statue"
                            className={classes.media}
                            height="140"
                            image={FremontLeninStatue}
                            title="Lenin Statue"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Lenin Statue
                            </Typography>
                            <Typography component="p">
                                <br />Found in a junkyard, it sits awaiting a <br />
                                buyer. It is often vandalized and has <br />
                                sparked a conversation about<br />
                                monuments to horrible people.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/LeninStatue">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to the Lenin Statue
                    </Button>
                    </Link>
                    </CardActions>  
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Fremont Public Market"
                            className={classes.media}
                            height="140"
                            image={FremontPublicMarket}
                            title="Fremont Public Market"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Fremont Public Market
                            </Typography>
                            <Typography component="p">
                                <br />
                                All year on Sundays from 10 am-4 pm, <br />
                                Fremont holds a farmer’s market. If you <br />
                                have nothing to do on a Sunday, check <br />
                                out the crafts, food, and antiques.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/FremontPublicMarket">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to the Fremont Public Market
                    </Button>
                    </Link>
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