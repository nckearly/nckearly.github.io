import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from './Typography';

const styles = theme => ({
  root: {
    margin: '0 auto',
    width: '35%',
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
    },
  },
  paper: {
    margin: '0 auto',
    maxWidth: '380px',
    [theme.breakpoints.down('xs')]: {
      width: '80% !important',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  header: {
    position: 'relative',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing.unit * 5,
  },
  flyerSmall: {
    display: 'flex',
    padding: 0,
    borderRadius: '4px',
    width: '100%',
    marginBottom: theme.spacing.unit * 1,
  },
  flyerBig: {
    display: 'flex',
    padding: 0,
    borderRadius: '4px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  click: {
    margin: theme.spacing.unit * 1,
  },
});
const image = 'static/img/flyer.png';

class Rush extends React.Component {
  state = {
    clicked: false,
  };

  handleChange = () => {
    this.setState(state => ({ clicked: !state.clicked }));
  };

  render() {
    const { classes } = this.props;
    const { clicked } = this.state;
    return (
      <div>
        <div className={classes.header}>
          <Typography align="center" variant="h2" marked="center">
            Rush Schedule
          </Typography>
        </div>
        <Dialog
          open={clicked}
          onClose={this.handleChange}
          aria-labelledby="simple-dialog-title"
        >
          <img className={classes.flyerBig} src={image} alt="crest" />
        </Dialog>
        <Paper onClick={this.handleChange} className={classes.paper}>
          <img className={classes.flyerSmall} src={image} alt="crest" />
        </Paper>
        <Typography className={classes.click} variant="body1" align="center">
          click to enlarge
        </Typography>
      </div>
    );
  }
}

Rush.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rush);
