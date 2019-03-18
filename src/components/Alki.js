//MIMI READ THIS (NOTE TO SELF):
//Currently langmarks links are undefined and the 
//images are not present because they've been
//commented out.
//You need to make cards with a link to each page
//Then make sure to map the pages properly 
//But you also need to know how and where to do that
//So once you've made the landmarks pages individually and you're
//Sure they work, link them to the landmarks page.

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
//Landmarks background image of the Space Needle
import LandmarksBanner from './LandmarksBanner.png';
//Banners
import AlkiBanner from './AlkiBanner.png'
import FremontBanner from './FremontBanner.png'
import LakeUnionBanner from './LakeUnionBanner.png'
import QueenAnneBanner from './QueenAnneBanner.png'
import UDistrictBanner from './UDistrictBanner.png'
import DowntownBanner from './DowntownBanner.png'

//Images for Alki page
import AlkiPointLighthouse from './AlkiPointLighthouse.jpg';
import AlkiBeach from './AlkiBeach.jpg';
import AlkiStatueOfLiberty from './AlkiStatueOfLiberty.jpg';



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
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Typography component="h1">
                                Alki
                        </Typography>
                            <CardMedia
                                component="img"
                                alt="Alki Point Lighthouse"
                                className={classes.media}
                                height="140"
                                image={AlkiPointLighthouse}
                                title="Alki Point Lighthouse"
                            />
                            <CardContent>
                                <Typography component="h4">
                                    Alki Point Lighthouse
                            </Typography>
                                <Typography component="p">
                                    <br />Though it’s not open to the public, it can <br />
                                    be toured on summer weekends. The <br />
                                    building serves as a point of navigation <br />
                                    and adds to the feeling of Alki being a <br />
                                    beach area with a beautiful view.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions> 
                    <Link to="/Landmarks/AlkiPointLighthouse">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to the Lighthouse
                    </Button>
                    </Link>
                    </CardActions>   
                    </Card>

                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Alki Beach"
                                className={classes.media}
                                height="140"
                                image={AlkiBeach}
                                title="Alki Beach"
                            />
                            <CardContent>
                                <Typography component="h4">
                                    Alki Beach
                            </Typography>
                                <Typography component="p">
                                    <br />A spot to swim and enjoy the Seattle <br />
                                    skyline. The beach also has a 2.5 mile <br />
                                    long path for runners and roller-skaters.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions> 
                    <Link to="/Landmarks/AlkiBeach">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to Alki Beach
                    </Button>
                    </Link>
                    </CardActions> 
                    </Card>

                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Replica Statue of Liberty"
                                className={classes.media}
                                height="140"
                                image={AlkiStatueOfLiberty}
                                title="Replica Statue of Liberty"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">

                                </Typography>
                                <Typography component="h4">
                                    Replica Statue of Liberty
                            </Typography>
                                <Typography component="p">
                                    <br />
                                    Donated to the public by Boy Scouts in
                                the 1950’s, <br /> this makes it clear you’re
                                visiting a city in the United <br /> States.
                                The statue was rebuilt after frequent <br />
                                    vandalism and remains as a meeting
                                    point.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions> 
                    <Link to="/Landmarks/ReplicaStatueOfLiberty">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to Replica Statue of Liberty
                    </Button>
                    </Link>
                    </CardActions>
                    </Card>
                </Card>
            </Paper>
        </div>

    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);