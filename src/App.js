import React, {Component}from 'react';
import{BrowserRouter, Route} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Home from "./components/Home";
import Community from "./components/Community";
import Transportation from "./components/Transporation";
import Landmarks from "./components/Landmarks";
import Cafes from "./components/Cafes";

const styles = {}

class App extends Component{
  render (){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
      <div>
        <Route path = "/" component={Home} exact />
        </div>
        <div>
        <Route path = "/" component={Community} exact />
        </div>
        <div>
        <Route path = "/Transportation" component={Transportation} exact />
        </div>
        <div>
        <Route path = "/Landmarks" component={Landmarks} exact />
        </div>
        <div>
        <Route path = "/Cafes" component={Cafes} exact />
        </div>
      </div>

        </BrowserRouter>
    );

  }
}
export default withStyles(styles)(App);