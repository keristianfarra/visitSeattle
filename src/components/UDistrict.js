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

//Images for U-District page
import UDistrictUniversity from './UDistrictUniversity.jpg';
import UDistrictAve from './UDistrictAve.jpg';
import UDistrictBurkeMuseum from './UDistrictBurkeMuseum.jpg';

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
                            University District
        </Typography>
                        <CardMedia
                            component="img"
                            alt="University of Washington"
                            className={classes.media}
                            height="140"
                            image={UDistrictUniversity}
                            title="University of Washington"
                        />
                        <CardContent>
                            <Typography component="h4">
                                University of Washington
            </Typography>
                            <Typography component="p">
                                <br />A beautiful and expansive campus that’s <br />
                                large enough to be considered a small <br />
                                town. During the spring, cherry blossoms <br />
                                in the quad will bloom and attract <br />
                                photographers.
            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="The Ave"
                            className={classes.media}
                            height="140"
                            image={UDistrictAve}
                            title="The Ave"
                        />
                        <CardContent>
                            <Typography component="h4">
                                The Ave (University Way NE)
            </Typography>
                            <Typography component="p">
                                <br />One long uphill street with densely <br />
                                packed food shops from around the <br />
                                world. Home to the University Book Store.
            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Burke Museum of Natural History"
                            className={classes.media}
                            height="140"
                            image={UDistrictBurkeMuseum}
                            title="Burke Museum of Natural History"
                        />
                        <CardContent>
                            <Typography component="h4">
                                Burke Museum of Natural History
            </Typography>
                            <Typography component="p">
                                <br />
                                A museum of natural history that’s <br />
                                currently undergoing expansion. The <br />
                                Burke Museum is home to a collection of <br />
                                preserved animal remains, used for <br />
                                morphological study.
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