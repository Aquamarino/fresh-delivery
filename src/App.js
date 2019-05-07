import React, { Component } from 'react';
import MainAppBar from './MainAppBar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import NavMerchant from './NavMerchant'
import PageCreateCommodity from './PageCreateCommodity'
import PageManageCommodity from "./PageAnalyseCommodity"
import PageManageOrder from "./PageManageOrder"
import PageWelcome from './PageWelcome'
import PageManageCustomer from './PageManageCustomer'
import PageAnalyseSales from './PageAnalyseSales'
import PageManageInventory from './PageManageInventory';

class App extends Component {
  render() {
    console.log(window.location)
    return (
      <div className="App">
      <Router>

        <Switch>
        <Route path="/" exact>
        <PageWelcome/>

        </Route>
        <Route path="/">
        <MainAppBar/>
        <Switch>

        <Route path="/c/">
        <Grid container justify="center" spacing={24}>
        <Grid item xs={2}>
        <p>this is flyer Page.</p>
        </Grid>
        <Grid item xs={8}>
        <p>this is customer main Page.</p>
        </Grid>
        </Grid>
        </Route>
        <Route path="/m/">
        <Grid container justify="center" spacing={24}>
        <Grid item xs={2}>
        <NavMerchant/>
        </Grid>
        <Grid item xs={8}>
        <Switch>
          <Route path="/m/create">
          <PageCreateCommodity/>
          </Route>
          <Route path="/m/orders">
          <PageManageOrder/>
          </Route>
          <Route path="/m/inventory">
          <PageManageInventory/>
          </Route>
          <Route path="/m/customers">
          <PageManageCustomer/>
          </Route>
          <Route path="/m/analyse-sales">
          <PageAnalyseSales/>
          </Route>
           <Route path="/m/analyse-commodity">
          <PageManageCommodity/>
          </Route>
        </Switch>
        
        </Grid>
        </Grid>
        </Route>
        </Switch>
        </Route>
        </Switch>
        </Router>
      </div>
      
    );
  }
}

export default App;
