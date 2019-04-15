/* eslint-disable react/prefer-stateless-function */
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './assets/theme';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Join from './pages/Join';
import Loader from './pages/Loader';
import Members from './pages/Members';
import Outreach from './pages/Outreach';
import WhiteRose from './pages/White-Rose';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router basename="/sigtaucolostate">
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Join} path="/join/" />
            <Route component={Contact} path="/Contact/" />
            <Route component={Outreach} path="/Outreach/" />
            <Route component={Alumni} path="/Alumni/" />
            <Route component={WhiteRose} path="/White-Rose/" />
            <Route component={Members} path="/Members/" />
            <Route component={Loader} path="/Loader/" />
            <Route component={() => 'Error: 404'} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
