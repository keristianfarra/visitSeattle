import React, {component, Component}from 'react';
import{BrowserRouter, Route,Switch} from 'react-router-dom';

import Home from "./components/Home";
import { withStyles } from '@material-ui/core/styles';
import Community from "./components/Community";
import Transportation from "./components/Transporation";
import Landmarks from "./components/Landmarks";
import Cafes from "./components/Cafes";

const styles = {}

class App extends Component{
  render (){
    return(
      <BrowserRouter>
      <div>
      <Switch>
        <Route path = "/" component={Home} exact />
        <Route path = "/Community" component={Home} exact />
        <Route path = "/Transportation" component={Home} exact />
        <Route path = "/Landmarks" component={Home} exact />
        <Route path = "/Cafes" component={Home} exact />
        </Switch>
        </div>
        </BrowserRouter>
    );

  }
}
export default withStyles(styles)(App);