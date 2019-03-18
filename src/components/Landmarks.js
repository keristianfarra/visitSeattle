// import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Alki from "./Alki";
//Landmarks background image of the Space Needle
import LandmarksBanner from './LandmarksBanner.png';

//Banners
import AlkiBanner from './AlkiBanner.png'
import FremontBanner from './FremontBanner.png'
import LakeUnionBanner from './LakeUnionBanner.png'
import QueenAnneBanner from './QueenAnneBanner.png'
import UDistrictBanner from './UDistrictBanner.png'
import DowntownBanner from './DowntownBanner.png'

// import { Link } from 'react-router-dom'
// import Alki from "./components/Alki";

// const AlkiLink = props => <Link to="./components/Alki.js" {...props} />
// //All the imports of images used in the landmarks cards.
// //Imports are kept here as a backup comment in case other javascript files are corrupted.
//
// import AlkiPointLighthouse from './AlkiPointLighthouse.jpg';
// import AlkiBeach from './AlkiBeach.jpg';
// import AlkiStatueOfLiberty from './AlkiStatueOfLiberty.jpg';

// import FremontTrollLandmarkFinal from './FremontTrollLandmarkFinal.jpg';
// import FremontLeninStatue from './FremontLeninStatue.jpg';
// import FremontPublicMarket from './FremontPublicMarket.jpg';

// import LakeUnion from './LakeUnion.jpg'
// import LakeUnionGasworksPark from './LakeUnionGasworksPark.jpg';
// import LakeUnionMOHAI from './LakeUnionMOHAI.jpg';

// import QueenAnneSpaceNeedle from './QueenAnneSpaceNeedle.jpg';
// import QueenAnneMuseum from './QueenAnneMuseum.jpg';
// import QueenAnnePacificScienceCenter from './QueenAnnePacificScienceCenter.jpg';

// import UDistrictUniversity from './UDistrictUniversity.jpg';
// import UDistrictAve from './UDistrictAve.jpg';
// import UDistrictBurkeMuseum from './UDistrictBurkeMuseum.jpg';

// import DowntownWestlake from './DowntownWestlake.jpg';
// import DowntownGumWall from './DowntownGumWall.jpg';
// import DowntownGreatWheel from './DowntownGreatWheel.jpg';

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

    //Title card for the landmark page
    return (
        <div class="container">
            <Paper className={classes.root} elevation={1}>
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
            </Paper>

            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="Queen Anne Banner"
                        className={classes.media}
                        height="140"
                        image={QueenAnneBanner}
                        title="Queen Anne (click to look at Queen Anne page)"
                    />
                </Card>
                <CardActions> 
                    <Link to="/Landmarks/QueenAnne">
                     <Button
                        color="inherit"
                        className={classes.loginButton}
                        // component={Link}
                        >
                        Explore Queen Anne
                    </Button>
                    </Link>
                    </CardActions> 
            </Paper>

            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="Downtown Banner"
                        className={classes.media}
                        height="140"
                        image={DowntownBanner}
                        title="Downtown (click to look at Downtown page)"
                    />
                </Card>
                <CardActions> 
                    <Link to="/Landmarks/Downtown">
                     <Button
                        color="inherit"
                        className={classes.loginButton}
                        // component={Link}
                        >
                        Explore Downtown 
                    </Button>
                    </Link>
                    </CardActions> 
            </Paper>

            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="Lake Union Banner"
                        className={classes.media}
                        height="140"
                        image={LakeUnionBanner}
                        title="Lake Union (click to look at Lake Union page)"
                    />
                </Card>
                <CardActions> 
                        <Link to="/Landmarks/LakeUnion">
                     <Button
                        color="inherit"
                        className={classes.loginButton}
                        // component={Link}
                        >
                        Explore Lake Union
                    </Button>
                    </Link>
                    </CardActions> 
            </Paper>

            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="University District Banner"
                        className={classes.media}
                        height="140"
                        image={UDistrictBanner}
                        title="University District (click to look at U-District page)"
                    />
                </Card>
                <CardActions> 
                    <Link to="/Landmarks/UDistrict">
                     <Button
                        color="inherit"
                        className={classes.loginButton}
                        // component={Link}
                        >
                        Explore U-District
                    </Button>
                    </Link>
                    </CardActions> 
            </Paper>

            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="Fremont Banner"
                        className={classes.media}
                        height="140"
                        image={FremontBanner}
                        title="Fremont (click to look at Fremont page)"
                    />
                    
                </Card>
                <CardActions> 
                    <Link to="/Landmarks/Fremont">
                     <Button
                        color="inherit"
                        className={classes.loginButton}
                        // component={Link}
                        >
                        Explore Fremont
                    </Button>
                    </Link>
                    </CardActions> 
            </Paper>
            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="Alki Banner"
                        className={classes.media}
                        height="140"
                        image={AlkiBanner}
                        title="Alki (click to look at Alki page)"
                    />                     
                    <CardActions> 
                        <Link to="/Landmarks/Alki">
                     <Button
                        color="inherit"
                        className={classes.loginButton}
                        // component={Link}
                        >
                        Explore Alki
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