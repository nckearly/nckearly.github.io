import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import LayoutBody from './LayoutBody';
import Typography from './Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  layoutBody: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
    [theme.breakpoints.down('xs')]: {
      padding: `0px ${theme.spacing.unit * .2}px`,
    }
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 2,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -120,
  },
  founders: {
    display: 'inline-block',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },

  members: {
    display: 'flex',
    flexDirection: 'column',
    border: '20',
  },
});

function History(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={12} md={12}>
            <div className={classes.item}>
              <Typography variant="h4" className={classes.title}>
                <strong>Chapter History</strong>
              </Typography>
              <Grid container spacing={40}>
                <Grid item xs={12} md={12}>
                  <div className={classes.item}>
                    <Typography variant="h6" align="center">
                      Sig Tau was founded on June 28, 1920 at the University of
                      Central Missouri in Warrensburg, Missouri. We were founded
                      by 17 Veterans of the the First World War. Sig Tau would
                      grow to encompass 175 different chapters nationwide of
                      which 82 are currently active. The Zeta Sigma Associate
                      Chapter at Colorado State University was founded in the
                      Spring Semester of 2017 by 11 men. However, these 11 men
                      are not our only founding fathers as we continue on
                      working to be chartered all men that become brothers are
                      considered founding fathers. We look forward to chartering
                      in the Spring of 2019!
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(History);
