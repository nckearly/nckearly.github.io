/* eslint-disable linebreak-style */
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../../components/Typography';

const styles = theme => ({
  button: {
    minWidth: 200,
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
  h2: {
    color: 'black',
    fontFamily: 'Bitter',
    fontWeight: 'bold',
    // fontStyle: 'italic',
  },
  spacer: {
    marginTop: theme.spacing.unit * 10,
  },
});

function MembersHero(props) {
  const { classes } = props;

  return (
    <div className="Hero">
      {
        <React.Fragment>
          <div>
            <br />
            <Typography
              className={classes.h2}
              align="center"
              variant="h2"
              marked="center"
            >
              Members
            </Typography>
          </div>
          <div className={classes.spacer} />
        </React.Fragment>
      }
    </div>
  );
}

MembersHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MembersHero);
