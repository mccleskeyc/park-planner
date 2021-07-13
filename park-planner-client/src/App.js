import React, {Component} from "react";
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getPlans} from './actions'
import Nav from './components/utility/Nav'
import Home from './components/utility/Home'
import Attraction from './components/org/Attractions'
import Food from './components/org/Food'
import Epcot from './components/org/parks/Epcot'
import MK from './components/org/parks/MK'
import Studios from './components/org/parks/Studios'
import Form from './components/utility/Form'
import Index from './components/utility/Index'
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
        {/* parks nav */}
          <Route exact path="/mk" component={MK} />
          <Route exact path="/epcot" component={Epcot} />
          <Route exact path="/studios" component={Studios} />
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
