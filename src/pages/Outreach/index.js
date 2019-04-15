/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import { withStyles } from '@material-ui/core';
import React from 'react';
import Template from '../../components/PageTemplate';
import Typography from '../../components/Typography';
import Community from '../Contact/Cards/Community';
import ProductHero from './OutreachHero';
import './styles.css';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  content: {
    margin: theme.spacing.unit * 4,
  },
  body: {
    // fontSize: '4vw',
    margin: theme.spacing.unit * 5,
  },
  header: {
    marginBottom: theme.spacing.unit * 5,
  },
  list: {
    position: 'relative',
    right: 21,
    [theme.breakpoints.down('md')]: {
      margin: `(${theme.spacing.unit * 1}) auto`,
    marginRight: theme.spacing.unit * 1,
    },
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grey: {
    margin: '0 auto',
    maxWidth: 500,
    color: 'white',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '4px',
  },
  button: {
    color: theme.palette.primary.light,
    display: 'inline',
    '&:hover': {
      borderBottom: `solid ${theme.palette.secondary.main}`,
      cursor: 'pointer',
    }
  },
});

class App extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <Template>
        <ProductHero />
        <div className={classes.content}>
          <Typography className={classes.header} variant="h2" align="center" marked="center">
            Community Outreach
          </Typography>
          <Typography className={classes.body} variant="h5">
            Members of Sig Tau at colorado state volunteer a minimum of 10 hours
            every semester to help uphold our priciple of Community
            <br />
            Sig Tau currently supports a variety of local and national
            orginizations, such as:
            <ol id="list" className={classes.list}>
              <li className={classes.grey}>Ram Ride</li>
              <li>Special Olympics</li>
              <li className={classes.grey}>Off-Campus Life at Colorado State University </li>
              <li>Special Olympics at Colorado State University</li>
              <li className={classes.grey}>Sigma Tau Gamma Headquarters </li>
              <li>Fortitude 5k by Boulder Boulder </li>
              <li className={classes.grey}>And many more...</li>
            </ol>
            <br />
            Organizations and Companies looking for volunteers please contact
            our <Typography
                className={classes.button}
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                variant="h5"
                component="span"
                >
                Director of Recruitment

                </Typography>
            <br />
          </Typography>
        </div>
        <div className={classes.card}>
            <Menu
              className={classes.popup}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              MenuListProps={{ disablePadding: true }}
            >
          <Community onClick={this.handleClose} disableMargins="true" />
            </Menu>
        </div>
      </Template>
    );
  }
}

export default withStyles(styles)(App);
