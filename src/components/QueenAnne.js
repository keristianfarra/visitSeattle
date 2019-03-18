// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';

//Images for Queen Anne page
import QueenAnneSpaceNeedle from './QueenAnneSpaceNeedle.jpg';
import QueenAnneMuseum from './QueenAnneMuseum.jpg';
import QueenAnnePacificScienceCenter from './QueenAnnePacificScienceCenter.jpg';

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

    //Title card for the landmark page (need to change it to Queen Anne title card)
    return (
        <div class="container">
            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <Typography component="h1">
                            Queen Anne
                        </Typography>
                        <CardMedia
                            component="img"
                            alt="Space Needle"
                            className={classes.media}
                            height="140"
                            image={QueenAnneSpaceNeedle}
                            title="Space Needle"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Space Needle
                            </Typography>
                            <Typography component="p">
                                <br />This iconic feat of engineering towers <br />
                                over Seattle. At the top of the elevator is a <br />
                                rotating restaurant.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to="/Landmarks/SpaceNeedle">

                            <Button variant="contained" color="primary" className={classes.button}
                            >
                                Take me to the SpaceNeedle
                    </Button>
                        </Link>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Museum of Pop Culture"
                            className={classes.media}
                            height="140"
                            image={QueenAnneMuseum}
                            title="Museum of Pop Culture"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Museum of Pop Culture
                        </Typography>
                            <Typography component="p">
                                <br />Formerly the EMP museum, this <br />
                                interesting structure is located right <br />
                                next to the Space Needle. The museum is a <br />
                                monument to music and trends.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to="/Landmarks/MoPOP">

                            <Button variant="contained" color="primary" className={classes.button}
                            >
                                Take me to the Museum of Pop Culture
                    </Button>
                        </Link>
                    </CardActions>

                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Pacific Science Center"
                            className={classes.media}
                            height="140"
                            image={QueenAnnePacificScienceCenter}
                            title="Pacific Science Center"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Pacific Science Center
            </Typography>
                            <Typography component="p">
                                <br />
                                A great place to take children interested <br />
                                in science. It often serves as a significant <br />
                                meeting point for parades.
            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to="/Landmarks/PacificScienceCenter">

                            <Button variant="contained" color="primary" className={classes.button}
                            >
                                Take me to the Pacific Science Center
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
