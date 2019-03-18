import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Home from "./components/Home";
import Community from "./components/Community";
import Landmarks from "./components/Landmarks";

/*Import Neighborhoods */
import Alki from "./components/Alki";
import QueenAnne from "./components/QueenAnne";
import Downtown from "./components/Downtown";
import LakeUnion from "./components/LakeUnion";
import UDistrict from "./components/UDistrict";
import Fremont from "./components/Fremont";





import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
const styles = {}

class App extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="fillParent">
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <Tab label="Home" component={Link} to="/" />
              <Tab label="Community" component={Link} to="/Community" />
              {/* <Tab label = "Transporation" component ={Link} to = "/Transportation"/> */}
              <Tab label="Landmarks" component={Link} to="/Landmarks" />
              {/* <Tab label = "Cafes" component ={Link} to = "/Cafes"/> */}
              {/* <Tab label="Alki" component={Link} to="/Landmarks/Alki" />  */}

              

            </Tabs>
          </AppBar>
          <Route path="/" component={Home} exact />

          <Route path="/Community" component={Community} exact />
          <Route path="/Landmarks" component={Landmarks} exact />
          <Route path="/Landmarks/Alki" component={Alki} exact /> 
          <Route path="/Landmarks/QueenAnne" component={QueenAnne} exact /> 
          <Route path="/Landmarks/Downtown" component={Downtown} exact /> 
          <Route path="/Landmarks/LakeUnion" component={LakeUnion} exact /> 
          <Route path="/Landmarks/UDistrict" component={UDistrict} exact /> 
          <Route path="/Landmarks/Fremont" component={Fremont} exact /> 





          


        </div>

      </BrowserRouter>

    );

  }
}
export default withStyles(styles)(App);