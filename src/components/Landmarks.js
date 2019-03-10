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
//Landmarks background image of the Space Needle
import LandmarksBanner from './LandmarksBanner.png';

//All the imports of images used in the landmarks cards
import AlkiPointLighthouse from './AlkiPointLighthouse.jpg';
import AlkiBeach from './AlkiBeach.jpg';
import AlkiStatueOfLiberty from './AlkiStatueOfLiberty.jpg';

import FremontTrollLandmarkFinal from './FremontTrollLandmarkFinal.jpg';
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
                </Card>
            </Paper>

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
                </Card>
            </Paper>

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
                </Card>
            </Paper>

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
                </Card>
            </Paper>

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