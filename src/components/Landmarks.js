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
//Landmarks background image of the Space Needle, NEED TO ADJUST and label with Roboto
import LandmarksBackground from './LandmarksBackground.jpg';

//All the imports of images used in the landmarks cards
import AlkiPointLighthouse from './AlkiPointLighthouse.jpg';
import AlkiBeach from './AlkiBeach.jpg';
import AlkiStatueOfLiberty from './AlkiStatueOfLiberty.jpg';

import FremontTroll from './FremontTroll.png';
import FremontLeninStatue from './FremontLeninStatue.jpg';
import FremontPublicMarket from './FremontPublicMarket.jpg';

import LakeUnion from './LakeUnion.jpg'
import LakeUnionGasworksPark from './LakeUnionGasworksPark.jpg';
import LakeUnionMOHAI from './LakeUnionMOHAI.jpg';

import QueenAnneSpaceNeedle from './QueenAnneSpaceNeedle.jpg';
import QueenAnneMuseum from './QueenAnneMuseum.jpg';
import QueenAnnePacificScienceCenter from './QueenAnnePacificScienceCenter.jpg';

import UDistrictUniversity from './UDistrictUniversity.jpg';
import UDistrictAve from './UDistrictAve.jpg';
import UDistrictBurkeMuseum from './UDistrictBurkeMuseum.jpg';

import DowntownWestlake from './DowntownWestlake.jpg';
import DowntownGumWall from './DowntownGumWall.jpg';
import DowntownGreatWheel from './DowntownGreatWheel.jpg';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function PaperSheet(props) {
    const { classes } = props;

    //Title card for the landmark page
    return (
        <div class="container">
            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Image of the Space Needle"
                            className={classes.media}
                            height="140"
                            image={LandmarksBackground}
                            title="Landmarks in Seattle"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            </Typography>
                            <Typography component="h1">
                                Landmarks in Seattle
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            //Alki Landmarks
            <Paper className={classes.root} elevation={1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Alki Point Lighthouse"
                            className={classes.media}
                            height="140"
                            image={AlkiPointLighthouse}
                            title="Alki Point Lighthouse"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">

                            </Typography>
                            <Typography component="h4">
                                Alki Point Lighthouse
                            </Typography>
                            <Typography component="p">
                                Though it’s not open to the public, it can
                                be toured on summer weekends. The
                                building serves as a point of navigation
                                and adds to the feeling of Alki being a
                                beach area with a beautiful view.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
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
                            <Typography gutterBottom variant="h5" component="h2">
                            </Typography>
                            <Typography component="h4">
                                Alki Beach
                            </Typography>
                            <Typography component="p">
                                A spot to swim and enjoy the Seattle
                                skyline. The beach also has a 2.5 mile
                                long path for runners and roller-skaters.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
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