/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import { withStyles, CssBaseline } from '@material-ui/core';
import Footer from './Footer';

const styles = theme => ({
  '@global': {
    html: {
      minHeight: '100%',
    },
    body: {
        minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    '#root': {
        minHeight: '100vh',
    },
  },
    root: {
      minHeight: '100vh',
    // minHeight: "calc(100vh - 64px)",
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    marginBottom: theme.spacing.unit * 4,
  },
  content: {
    marginTop: 64,
    [theme.breakpoints.down('md')]: {
      marginTop: 56,
    },
    width: '100%',
    height: '100%',
  },
  spacer: {
    flex: 1,
  },
});


// eslint-disable-next-line react/prefer-stateless-function
class PageTemplate extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={this.props.classes.root}>
                <div>
                    <Header home="Home Page" />
                </div>
                <div className={this.props.classes.content}>
                   {this.props.children}
                </div>
                <div className={this.props.classes.spacer} />


                <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PageTemplate);
