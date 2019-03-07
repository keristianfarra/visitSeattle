import React, {Component}from 'react';
import{BrowserRouter, Route} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Home from "./components/Home";
import Community from "./components/Community";
import Transportation from "./components/Transporation";
import Landmarks from "./components/Landmarks";
import Cafes from "./components/Cafes";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import {Link}from "react-router-dom";
import {Button} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
const styles = {}

class App extends Component{
  state = {
    value: 0,
  };
handleChange = (event, value) => {
  this.setState({ value });
};

  render (){
    const { value } = this.state;
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className = "fillParent"> 
      <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                <Tab label = "Home" component ={Link} to = "/"/>
                <Tab label = "Community" component ={Link} to = "/Community"/>
                <Tab label = "Transporation" component ={Link} to = "/Transportation"/>
                <Tab label = "Landmarks" component ={Link} to = "/Landmarks"/>
                <Tab label = "Cafes" component ={Link} to = "/Cafes"/>

                </Tabs>
            </AppBar>
        <Route path = "/" component={Home} exact />
        
        <Route path = "/Community" component={Community} exact />
       
        <Route path = "/Transportation" component={Transportation} exact />
      
        <Route path = "/Landmarks" component={Landmarks} exact />
      
        <Route path = "/Cafes" component={Cafes} exact />
       
      </div>

        </BrowserRouter>
        
    );

  }
}
export default withStyles(styles)(App);