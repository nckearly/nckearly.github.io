/* eslint-disable linebreak-style */
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import ProductHeroLayout from '../../components/ProductHeroLayout';
import Typography from '../../components/Typography';

const backgroundImage =
  'https://images.unsplash.com/photo-1475173641776-50e70b746de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

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
    fontSize: '4.5vw',
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 8,
      fontSize: '2vw',
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
  },
  h2: {
    color: 'white',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

function JoinHero(props) {
  const { classes } = props;

  return (
    <div className="Hero">
      <ProductHeroLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img style={{ display: 'none' }} src={backgroundImage} alt="" />

        {
          <React.Fragment>
            <div >
              <Typography className={classes.h5} color="inherit" align="center" >
                Thank you for your interest in joining, <br /> see the Rush
                Schedule below for more info <br /> regarding future rush events
              </Typography>
              <br />
            </div>
          </React.Fragment>
        }
      </ProductHeroLayout>
    </div>
  );
}

JoinHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JoinHero);
