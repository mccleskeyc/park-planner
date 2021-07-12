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
          <Route exact path="/" component={Home} />
          <Route exact path="/attractions" component={Attraction} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/mk" component={MK} />
          <Route exact path="/epcot" component={Epcot} />
          <Route exact path="/studios" component={Studios} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/index" component={Index} />
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
