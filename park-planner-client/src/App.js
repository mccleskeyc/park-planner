import React, {Component} from "react";
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getPlans} from './actions'
// import utilities
import Nav from './components/utility/Nav'
import Home from './components/utility/Home'
import Form from './components/utility/Form'
import Index from './components/utility/Index'
import '../src/index.css'
// import categories
import Attraction from './components/org/Attractions'
import Food from './components/org/Food'
// import parks
import Epcot from './components/org/parks/Epcot'
import MK from './components/org/parks/MK'
import Studios from './components/org/parks/Studios'
import Resorts  from "./components/org/parks/Resorts";
import DisneySprings from "./components/org/parks/DisneySprings";
// import epcot lands
import FutureWorld from "./components/org/lands/Epcot/FutureWorld";
import AmericanAdventure from "./components/org/lands/Epcot/AmericanAdventure";
import Canada from "./components/org/lands/Epcot/Canada";
import China from "./components/org/lands/Epcot/China";
import France from "./components/org/lands/Epcot/France";
import Germany from "./components/org/lands/Epcot/Germany";
import Italy from "./components/org/lands/Epcot/Italy";
import Japan from "./components/org/lands/Epcot/Japan";
import Mexico from "./components/org/lands/Epcot/Mexico";
import Morocco from "./components/org/lands/Epcot/Morocco";
import Norway from "./components/org/lands/Epcot/Norway";
import UK from "./components/org/lands/Epcot/UK";
import WorldShowcaseOther from "./components/org/lands/Epcot/WorldShowcaseOther";
// import mk lands
import Adventureland from './components/org/lands/MK/Adventureland';
import Fantasyland from './components/org/lands/MK/Fantasyland';
import Frontierland from './components/org/lands/MK/Frontierland';
import LibertySquare from './components/org/lands/MK/LibertySquare';
import MainStreet from './components/org/lands/MK/MainStreet';
import Tomorrowland from './components/org/lands/MK/Tomorrowland';
// import studios lands
import AnimationCourtyard from './components/org/lands/Studios/AnimationCourtyard';
import CommisaryLane from './components/org/lands/Studios/CommisaryLane';
import EchoLake from './components/org/lands/Studios/EchoLake';
import GalaxysEdge from './components/org/lands/Studios/GalaxysEdge';
import GrandAdventure from './components/org/lands/Studios/GrandAdventure';
import HollywoodBlvd from './components/org/lands/Studios/HollywoodBlvd';
import PixarPlace from './components/org/lands/Studios/PixarPlace';
import SunsetBlvd from './components/org/lands/Studios/SunsetBlvd';
import ToyStoryLand from './components/org/lands/Studios/ToyStoryLand';
import Categories from './components/utility/Categories'
//internal 
import Parks from './components/utility/Parks'
import Lands from './components/org/lands/Lands'


class App extends Component {

  componentDidMount() {
    this.props.getPlans();
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }
    return (
    <Router>
      <Nav />
        <Switch>
        {/* main nav */}
          <Route exact path="/" component={Home} />
          <Route exact path="/attractions" component={Attraction} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/index" component={Index} />
        {/* internal nav */}
          <Route exact path="/parks" component={Parks} />
          <Route exact path="/lands" component={Lands} />
        {/* button nav */}
          <Route exact path="/categories" component={Categories} />
        {/* parks nav */}
          <Route exact path="/mk" component={MK} />
          <Route exact path="/epcot" component={Epcot} />
          <Route exact path="/studios" component={Studios} />
          <Route exact path="/resorts" component={Resorts} />
          <Route exact path="/disneysprings" component={DisneySprings} />
        {/* epcot lands nav */}
          <Route exact path="/futureworld" component={FutureWorld} />
          <Route exact path="/americanadventure" component={AmericanAdventure} />
          <Route exact path="/canada" component={Canada} />
          <Route exact path="/china" component={China} />
          <Route exact path="/france" component={France} />
          <Route exact path="/germany" component={Germany} />
          <Route exact path="/italy" component={Italy} />
          <Route exact path="/japan" component={Japan} />
          <Route exact path="/mexico" component={Mexico} />
          <Route exact path="/morocco" component={Morocco} />
          <Route exact path="/norway" component={Norway} />
          <Route exact path="/uk" component={UK} />
          <Route exact path="/worldshowcase" component={WorldShowcaseOther} />
        {/* mk lands nav */}
          <Route exact path="/adventureland" component={Adventureland} />
          <Route exact path="/fantasyland" component={Fantasyland} />
          <Route exact path="/frontierland" component={Frontierland} />
          <Route exact path="/libertysquare" component={LibertySquare} />
          <Route exact path="/mainstreet" component={MainStreet} />
          <Route exact path="/tomorrowland" component={Tomorrowland} />
        {/* studios lands nav */}
        <Route exact path="/animationcourtyard" component={AnimationCourtyard} />
        <Route exact path="/commisarylane" component={CommisaryLane} />
        <Route exact path="/echolake" component={EchoLake} />
        <Route exact path="/galaxysedge" component={GalaxysEdge} />
        <Route exact path="/grandadventure" component={GrandAdventure} />
        <Route exact path="/hollywoodblvd" component={HollywoodBlvd} />
        <Route exact path="/pixarplace" component={PixarPlace} />
        <Route exact path="/sunsetblvd" component={SunsetBlvd} />
        <Route exact path="/toystoryland" component={ToyStoryLand} />
        </Switch>
    </Router>
  );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, {getPlans})(App);
