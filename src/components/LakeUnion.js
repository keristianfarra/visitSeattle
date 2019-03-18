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

//Images for Lake Union page
import LakeUnion from './LakeUnion.jpg'
import LakeUnionGasworksPark from './LakeUnionGasworksPark.jpg';
import LakeUnionMOHAI from './LakeUnionMOHAI.jpg';

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

    //Title card for the landmark page (need to change it to Lake Union title card)
    return (
        <div class="container">
            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <Typography component="h1">
                            Lake Union
        </Typography>
                        <CardMedia
                            component="img"
                            alt="Lake Union"
                            className={classes.media}
                            height="140"
                            image={LakeUnion}
                            title="Lake Union"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Lake Union
            </Typography>
                            <Typography component="p">
                                <br />A place where one can swim and kayak. <br />
                                During the summer, there are air shows <br />
                                from the U.S. Navy., watched by people in <br />
                                boats and innertubes.
            </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/VisitLakeUnion">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to Lake Union
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
                            image={LakeUnionGasworksPark}
                            title="Lenin Statue"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Gasworks Park
            </Typography>
                            <Typography component="p">
                                <br />Formed from a retired gas manufacturing
                plant, this is a grassy area near the lake <br />
                                to hang out. Gasworks Park is a <br />
                                significant meeting point for the Summer <br />
                                Solstice Parade.
            </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/GasworksPark">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to Gasworks Park
                    </Button>
                    </Link>
                    </CardActions> 
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Lake Union Museum of History and Industry"
                            className={classes.media}
                            height="140"
                            image={LakeUnionMOHAI}
                            title="Lake Union MOHAI"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Museum of History and Industry
            </Typography>
                            <Typography component="p">
                                <br />
                                Located near the booming tech industry, <br />
                                this museum holds 4 million Seattle <br />
                                specific artifacts. The MOHAI is affiliated <br />
                                with the Smithsonian museum.
            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions> 
                    <Link to="/Landmarks/MuseumOfHistoryAndIndustry">
                     <Button
                        color="inherit"
                        className={classes.loginButton}>
                        Take me to Museum of History and Industry
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