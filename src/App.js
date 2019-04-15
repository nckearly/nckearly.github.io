/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './assets/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Contact from './pages/Contact';
import Outreach from './pages/Outreach';
import Alumni from './pages/Alumni';
import WhiteRose from './pages/White-Rose';
import Members from './pages/Members';
import Loader from './pages/Loader';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
          <Route component={Home} path="/" exact />
            <Route component={Join} path="/join/" />
            <Route component={Contact} path="/Contact/" />
            <Route component={Outreach} path="/Outreach/" />
            <Route component={Alumni} path="/Alumni/" />
            <Route component={WhiteRose} path="/White-Rose/" />
            <Route component={Members} path="/Members/" />
            <Route component={Loader} path="/Loader/" />
            <Route component={() => "Error: 404"} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default (App);
