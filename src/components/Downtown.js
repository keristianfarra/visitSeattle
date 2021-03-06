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

//Images for Downtown page
import DowntownWestlake from './DowntownWestlake.jpg';
// import DowntownGumWall from './DowntownGumWall.jpg';
import TheGumwall from './TheGumwall.jpg';
import DowntownGreatWheel from './DowntownGreatWheel.jpg';

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

    //Title card for the landmark page (need to change it to U District title card)
    return (
        <div class="container">
            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <Typography component="h1">
                            Downtown
                        </Typography>
                        <CardMedia
                            component="img"
                            alt="Westlake Shopping Center"
                            className={classes.media}
                            height="140"
                            image={DowntownWestlake}
                            title="Westlake Shopping Center"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Westlake Shopping Center
                        </Typography>
                            <Typography component="p">
                                <br />A bustling shopping area with an <br />
                                underground transportation hub. <br />
                                Westlake Center is the meeting place for<br />
                                protests and parades, it’s always busy.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/WestlakeShoppingCenter">

                    <Button variant="contained" color="primary" className={classes.button}
                        >
                        Take me to the Westlake Shopping Center
                    </Button>
                    </Link>
                    </CardActions> 
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Pike Place Gum Wall"
                            className={classes.media}
                            height="140"
                            // image={DowntownGumWall}
                            image= {TheGumwall}
                            title="Pike Place Gum Wall"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Pike Place Gum Wall
                        </Typography>
                            <Typography component="p">
                                <br />A market that’s unique to Seattle, and  <br />
                                always has something to explore. Pike  <br />
                                Place has a wall of chewed gum that acts  <br />
                                as an unsanitary public art project. <br />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/PikePlaceGumWall">

                    <Button variant="contained" color="primary" className={classes.button}
                        >
                        Take me to the Pike Place Gum Wall
                    </Button>
                    </Link>
                    </CardActions> 
                
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Great Ferris Wheel"
                            className={classes.media}
                            height="140"
                            image={DowntownGreatWheel}
                            title="Great Ferris Wheel"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Great Ferris Wheel
                        </Typography>
                            <Typography component="p">
                                <br />
                                Located near the Seattle Aquarium and  <br />
                                Pike Place, this wheel has a view of the  <br />
                                harbor. Tickets can be purchased online  <br />
                                in advance to avoid long lines.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/GreatFerrisWheel">

                    <Button variant="contained" color="primary" className={classes.button}
                        >
                        Take me to the Great Ferris Wheel
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