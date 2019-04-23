import React, { Component } from 'react';


import MainAppBar from './MainAppBar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <MainAppBar/>
        <Switch>
        <Route path="/" exact>
        <p>Welcome! please choose <Link to="/c">Customer</Link>/ Merchant</p>
        </Route>
        <Route path="/c/">
        <p>this is customer Page.</p>
        </Route>
        <Route path="/m/">
        <p>this is merchant Page.</p>
        </Route>
        </Switch>
        </Router>
      </div>
      
    );
  }
}

export default App;
