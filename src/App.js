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

{/* QueenAnne  */}
          <Route path="/Landmarks/SpaceNeedle" component={() => { window.location = 'https://www.google.com/maps/place/Space+Needle/@47.6205063,-122.3514661,17z/data=!3m1!4b1!4m5!3m4!1s0x5490151f4ed5b7f9:0xdb2ba8689ed0920d!8m2!3d47.6205063!4d-122.3492774'; return null;} }  /> 
          <Route path="/Landmarks/MoPOP" component={() => { window.location = 'https://www.google.com/maps?q=museum+of+pop+culture&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjVuNizt4zhAhWQ6FQKHQXFBy4Q_AUIDygC'; return null;} }  /> 
          <Route path="/Landmarks/PacificScienceCenter" component={() => { window.location = 'https://www.google.com/maps/place/Pacific+Science+Center/@47.6197393,-122.3532811,17z/data=!3m2!4b1!5s0x5490154585bf6ead:0x78c88c9996a4a8c0!4m5!3m4!1s0x5490154cbd561603:0x99a953b20bf0eb3e!8m2!3d47.6197393!4d-122.3510924'; return null;} }  /> 
{/* Downtown  */}
          <Route path="/Landmarks/WestlakeShoppingCenter" component={() => { window.location = 'https://www.google.com/maps/place/Westlake+Center/@47.6120485,-122.3396212,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab4a5c286e5:0xc3134777cf5f660!8m2!3d47.6120485!4d-122.3374325'; return null;} }  /> 
          <Route path="/Landmarks/PikePlaceGumWall" component={() => { window.location = 'https://www.google.com/maps/place/Gum+Wall/@47.6084252,-122.3425538,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab259528c69:0x2034aac2267a1e23!8m2!3d47.6084252!4d-122.3403651'; return null;} }  /> 
          <Route path="/Landmarks/GreatFerrisWheel" component={() => { window.location = 'https://www.google.com/maps/place/Seattle+Great+Wheel/@47.6062158,-122.3447071,17z/data=!3m1!4b1!4m5!3m4!1s0x54906aadf98c7f51:0xa5209073def1dac6!8m2!3d47.6062158!4d-122.3425184'; return null;} }  /> 
{/* Lake Union  */}
          <Route path="/Landmarks/VisitLakeUnion" component={() => { window.location = 'https://www.google.com/maps/place/Lake+Union/@47.6399383,-122.3534045,14z/data=!3m1!4b1!4m5!3m4!1s0x5490150855d85f3f:0xeb5feb67cd0a7b6d!8m2!3d47.6396286!4d-122.3332684'; return null;} }  /> 
          <Route path="/Landmarks/GasworksPark" component={() => { window.location = 'https://www.google.com/maps/place/Gas+Works+Park/@47.6442511,-122.3865767,12.25z/data=!4m12!1m6!3m5!1s0x54901502b25bb07f:0x1e6e55abec496196!2sGas+Works+Park!8m2!3d47.6456308!4d-122.3343532!3m4!1s0x54901502b25bb07f:0x1e6e55abec496196!8m2!3d47.6456308!4d-122.3343532'; return null;} }  /> 
          <Route path="/Landmarks/MuseumOfHistoryAndIndustry" component={() => { window.location = 'https://www.google.com/maps/place/Museum+of+History+%26+Industry+(MOHAI)/@47.6276176,-122.3387694,17z/data=!3m2!4b1!5s0x5490153bbf965afb:0x64f15a43e3b39298!4m5!3m4!1s0x5490153bc0058c35:0x85f9776196864bd7!8m2!3d47.6276176!4d-122.3365807'; return null;} }  /> 

{/* U-District*/}
          <Route path="/Landmarks/UniversityOfWashington" component={() => { window.location = 'https://www.google.com/maps/place/University+of+Washington/@47.6553351,-122.3057086,17z/data=!3m1!4b1!4m5!3m4!1s0x549014929d8535eb:0x6b742c7901b82ba3!8m2!3d47.6553351!4d-122.3035199'; return null;} }  /> 
          <Route path="/Landmarks/TheAve" component={() => { window.location = 'https://www.google.com/maps/place/The+Ave,+Seattle,+WA+98105/@47.6631019,-122.3152899,17z/data=!3m1!4b1!4m5!3m4!1s0x5490148af2f4e337:0xa584d0c4f5e6bcb!8m2!3d47.6631019!4d-122.3131012'; return null;} }  /> 
          <Route path="/Landmarks/BurkeMuseumOfNaturalHistory" component={() => { window.location = 'https://www.google.com/maps/place/Burke+Museum+of+Natural+History+and+Culture/@47.660622,-122.3125462,17z/data=!3m1!4b1!4m5!3m4!1s0x5490148b0b6c61a5:0xce1313c2cca564ca!8m2!3d47.660622!4d-122.3103575'; return null;} }  /> 

{/* Fremont*/}
          <Route path="/Landmarks/FremontTroll" component={() => { window.location = 'https://www.google.com/maps/place/Fremont+Troll/@47.651246,-122.3498699,17z/data=!3m1!4b1!4m5!3m4!1s0x5490150128a784bd:0x9ddb04f1ce7199df!8m2!3d47.651246!4d-122.3476812'; return null;} }  /> 
          <Route path="/Landmarks/LeninStatue" component={() => { window.location = 'https://www.google.com/maps/place/Statue+of+Lenin/@47.6513919,-122.3531973,17z/data=!3m1!4b1!4m5!3m4!1s0x54901507524e935d:0x9f9e3a07bbbb2a8d!8m2!3d47.6513919!4d-122.3510086'; return null;} }  /> 
          <Route path="/Landmarks/FremontPublicMarket" component={() => { window.location = 'https://www.google.com/maps/place/Fremont+Sunday+Street+Market/@47.6501098,-122.3539124,17z/data=!3m1!4b1!4m5!3m4!1s0x549015accb0ccd1f:0xa71b8c5699ae4086!8m2!3d47.6501098!4d-122.3517237'; return null;} }  /> 

{/* Alki */}
          <Route path="/Landmarks/AlkiPointLighthouse" component={() => { window.location = 'https://www.google.com/maps/place/Alki+Point+Lighthouse/@47.5762663,-122.4227939,17z/data=!3m1!4b1!4m5!3m4!1s0x5490409a91d15747:0xbc1d4abecf0530e2!8m2!3d47.5762663!4d-122.4206052'; return null;} }  /> 
          <Route path="/Landmarks/AlkiBeach" component={() => { window.location = 'https://www.google.com/maps?q=alki+beach&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjphb-mvIzhAhUGjlQKHUHwAu0Q_AUIDygC'; return null;} }  /> 
          <Route path="/Landmarks/ReplicaStatueOfLiberty" component={() => { window.location = 'https://www.google.com/maps/place/Statue+of+Liberty+Plaza+-+Seattle/@47.5860397,-122.4199358,14z/data=!4m8!1m2!2m1!1salki+ReplicaStatueOfLiberty!3m4!1s0x549040860a460dd7:0x997a4a400f7d53b2!8m2!3d47.5793411!4d-122.4106379'; return null;} }  /> 

          


        </div>

      </BrowserRouter>

    );

  }
}
export default withStyles(styles)(App);