import React, {Component}from 'react';
import{BrowserRouter, Route} from 'react-router-dom';

import Home from "./components/Home";
import { withStyles } from '@material-ui/core/styles';


const styles = {}

class App extends Component{
  render (){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
    
        <Route path = "/" component={Home} exact />
        <Route path = "/Community" component={Home} exact />
        <Route path = "/Transportation" component={Home} exact />
        <Route path = "/Landmarks" component={Home} exact />
        <Route path = "/Cafes" component={Home} exact />
        
        </div>
        </BrowserRouter>
    );

  }
}
export default withStyles(styles)(App);