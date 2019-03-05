
/** Just the tab bars */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HomeImage from '../home.jpg';
import SimpleSlider from "./Slider"


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
const styles = {backgroundImage: `url(${ HomeImage })`}

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
        <NoSsr>
            <div className={classes.root}>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                <LinkTab label="Home" href="Home" />
                <LinkTab label="Community" href="Community" />
                <LinkTab label="Transporation" href="Transporation" />
                <LinkTab label="Landmarks" href="Landmarks" />
                <LinkTab label="Cafes" href="Cafes" />
                </Tabs>
            </AppBar>
            </div>
        </NoSsr>
        <SimpleSlider/>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
