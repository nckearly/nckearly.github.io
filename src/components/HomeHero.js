/* This is the hero content for the home page, this file does not format
    the positioning it simply supplies the layout with content to populate. Generally the
    layout has plenty of overrides and can be completely overriden with cstom formatting
    to be placed. If you dont like the formatting, use an override in thisfile instead of
    the layout file. See documentation in the layout file for any help with overrides
    */

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import ProductHeroLayout from './ProductHeroLayout';
import Typography from './Typography';


const backgroundImage =
  // logan-volleyball
  // 'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/background-images/20682404.jpg'
  // hiking
  // 'https://images.unsplash.com/photo-1486210284477-e900ad8a6820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80';
  // hiking snow pines
  'https://images.unsplash.com/photo-1497501849790-78f74380d9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
// 'https://images.unsplash.com/photo-1517446915321-65e972f1b494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '0f07af', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
    [theme.breakpoints.down('sm')]: {
      width: 50,
    },
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing.unit * 4,
      fontSize: '4.7vw',
    },
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <div className="Hero">
      <ProductHeroLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img style={{ display: 'none' }} src={backgroundImage} alt="" />

        {
          <Typography
            color="inherit"
            align="center"
            marked="center"
            variant="h5"
            className={classes.h5}
          >
            LEARNING - INTEGRITY - EXCELLENCE - LEADERSHIP - CITIZENSHIP -
            BROTHERHOOD
          </Typography>
        }
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} to="/join" variant="button" />
          )}
        >
          <span className="join">Join Now</span>
        </Button>
        <Typography variant="body1" color="inherit" className={classes.more}>
          Start your journey
        </Typography>
      </ProductHeroLayout>
    </div>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
