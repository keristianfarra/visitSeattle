
/** Just the tab bars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
/* import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs'; */
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import SimpleSlider from "./Slider";
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
// import {Link}from "react-router-dom";
// import {Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import home from './home.jpg';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}
const styles = {}

class Home extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div className={classes.root}>

        </div>

        {/* <SimpleSlider/> */}
        <div class="container">
          <Paper className={classes.root} elevation={1}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Visit Seattle Home Page"
                  className={classes.media}
                  height="140"
                  image={home}
                  title="Seattle Skyline"
                />
              </CardActionArea>
            </Card>
          </Paper>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
