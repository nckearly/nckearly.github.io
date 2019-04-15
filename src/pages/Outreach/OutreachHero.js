import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import ProductHeroLayout from '../../components/ProductHeroLayout';
import Typography from '../../components/Typography';

const backgroundImage =
  // 'https://images.unsplash.com/17/unsplash_5252bb51404f8_1.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
 'https://images.unsplash.com/photo-1472390155757-7704d54b9dc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "0f07af", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 0,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing.unit * 10,
    }
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
      fontSize: 80,
    }
  },
  h2: {
    color: 'white',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

function OutreachHero(props) {
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
        <img style={{ display: "none" }} src={backgroundImage} alt="" />

        {
          <React.Fragment>
            <div>
              <Typography className={classes.h1} align="center" variant="h1">
                Special Olympics
              </Typography>
              <br />
              <Typography className={classes.h2} align="center" variant="h2">
                Benefit Concert
              </Typography>
            </div>
            <div className={classes.h5}>
              <Typography color="inherit" align="center" variant="h5">
                <em>April 12th, 2019</em> <br />LSC Theater Doors open 6:00 pm
              </Typography>
              <br />

              <Typography
                color="inherit"
                align="center"
                marked="center"
                variant="h5"
              >
                Bands soon to be announced
              </Typography>
            </div>
          </React.Fragment>
        }
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          href="https://sigtau.crowdchange.co/5296"
          target="_new"
        >
          <span className="join">Buy Tickets</span>
        </Button>
        <Typography variant="body1" color="inherit" className={classes.more}>
          Donate
        </Typography>
      </ProductHeroLayout>
    </div>
  );
}

OutreachHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutreachHero);
