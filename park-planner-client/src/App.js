import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
  render() {
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

export default App;
