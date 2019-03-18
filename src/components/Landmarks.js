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
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
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
                        <Button variant="contained" color="primary" className={classes.button}
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
                        <Button variant="contained" color="primary" className={classes.button}
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
                        <Button variant="contained" color="primary" className={classes.button}
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
                        <Button variant="contained" color="primary" className={classes.button}
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
                        <Button variant="contained" color="primary" className={classes.button}
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
                            <Button variant="contained" color="primary" className={classes.button}
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