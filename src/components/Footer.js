// this is the footer file, it makes the footer for every page
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Faceboon_icon from 'mdi-material-ui/FacebookBox';
import Instagram_icon from 'mdi-material-ui/Instagram';
import Twitter_icon from 'mdi-material-ui/TwitterBox';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Typography from './Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    display: 'flex',
    margin: '0 20%',
    padding: '1%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 10%',
    },
  },
  content: {
    color: theme.palette.common.white,
    marginRight: theme.spacing.unit * 2.5,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  columns: {
    display: 'flex',
    alignItems: 'baseline',
    flexGrow: 1,
  },
  links: {
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  button: {
    marginTop: 'auto',
    minWidth: 97,
    marginBottom: 'auto',
    color: theme.palette.primary.main,
    width: '20%',
    height: '10%',
    align: 'right',
  },
  join: {
    fontFamily: 'Oswald',
    fontWeight: 700,
    fontSize: '1vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} square="true">
        <div className={classes.container}>
          <div className={classes.columns}>
            <Typography className={classes.content} align="left" variant="h4">
              <strong>Follow Us | </strong>{' '}
            </Typography>
            <IconButton
              className={classes.links}
              mini="true"
              color="secondary"
              href="https://www.facebook.com/SigTauCOstate/"
              component="a"
              target="_new"
            >
              <Faceboon_icon />
            </IconButton>
            <IconButton
              className={classes.links}
              size="tiny"
              color="secondary"
              href="https://www.instagram.com/sigtaucostate/?hl=en"
              component="a"
              target="_new"
            >
              <Instagram_icon />
            </IconButton>
            <IconButton
              className={classes.links}
              variant="contained"
              size="tiny"
              color="secondary"
              href="https://twitter.com/sigtaucostate"
              component="a"
              target="_new"
            >
              <Twitter_icon />
            </IconButton>
          </div>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            component={linkProps => (
              <Link {...linkProps} to="/join" variant="button" />
            )}
          >
            <span className={classes.join}>Join Now</span>
          </Button>
        </div>
      </Paper>
    </div>
  );
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
