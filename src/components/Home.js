
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
import SimpleSlider from "./Slider";
// import Link from '@material-ui/core/Link';
// import {Link}from "react-router-dom";
// import {Button} from '@material-ui/core';


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
       
        <SimpleSlider/>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
