import React from 'react';
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
import DowntownGumWall from './DowntownGumWall.jpg';
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
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Pike Place Gum Wall"
                            className={classes.media}
                            height="140"
                            image={DowntownGumWall}
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
                </Card>
            </Paper>
        </div>

    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);