/* import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        numClicks:0
      }
    }
    handleClick= ()=>{
      console.log("hello world");
        this.setState({
          numClicks:this.state.numClicks+1
        });
      }
  render() {
    return (
      <div className="App">
      <div class='page'>
      <header>
        <h1>Explore Seattle like a local</h1>
      </header>
      <figure>
        <img src="/home.jpg" alt="A picture of Seattle."/>
      </figure>
      <Button
        variant="contained" 
        color="primary" 
        onClick= {this.handleClick}>
        Transportation
        </Button>
      <Button
        variant="contained" 
        color="primary" 
        onClick= {this.handleClick}>
        Landmarks
      </Button>
      <Button
        variant="contained" 
        color="primary" 
        onClick= {this.handleClick}>
        Cafes
      </Button>
      <Button
        variant="contained" 
        color="primary" 
        onClick= {this.handleClick}>
        Community
      </Button>
    </div>
      </div>
    );
  }
}

export default App;
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HomeImage from './home.jpg';


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

/* export class Home extends React.Component {
  render() {
      return (
          <div style={styles.paperContainer}>
          </div>
      )
  }
} */

class NavTabs extends React.Component {
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
          {value === 0 && <TabContainer>
            <img src="/home.jpg" alt="Seattle."/>
          </TabContainer>}
          {value === 1 && <TabContainer>
            View Neighborhood Guide or Discuss Seattle with Locals
            </TabContainer>}
          {value === 2 && <TabContainer>
            Enter From and To Address to get directions
            
          </TabContainer>}
          {value === 3 && <TabContainer>
            Popular Landmarks in Seattle
          </TabContainer>}
          {value === 4 && <TabContainer>
            Search by Address or Neighborhood
            Cafes</TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
