/* eslint-disable linebreak-style */
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../components/Button';
import ProductHeroLayout from '../../components/ProductHeroLayout';
import Typography from '../../components/Typography';

const backgroundImage =
  'https://images.unsplash.com/photo-1502517787199-e68205b0c811?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '0f07af', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 0,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10,
    },
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
  h1: {
    color: 'white',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
    }
  },
  h2: {
    color: 'white',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

function RoseHero(props) {
  const { classes } = props;

  return (
    <div className="Hero">
      <ProductHeroLayout
        backgroundClassName={classes.background}
        override="true"
        header="/static/img/so-logo.png"
        width="60%"
      >
        {/* Increase the network loading priority of the background image. */}
        <img style={{ display: 'none' }} src={backgroundImage} alt="" />

        {
          <React.Fragment>
            <div>
              <Typography className={classes.h1} align="center" variant="h1">
                Sigma Tau Gamma's
              </Typography>
              <br />
              <Typography className={classes.h2} align="center" variant="h2" marked="center">
                White Rose
              </Typography>
            </div>

          </React.Fragment>
        }

      </ProductHeroLayout>
    </div>
  );
}

RoseHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoseHero);
