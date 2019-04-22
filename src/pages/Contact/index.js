/* eslint-disable react/prop-types */
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Template from '../../components/PageTemplate';
import Typography from '../../components/Typography';
import CommunityCard from './Cards/Community';
import EducationCard from './Cards/Education';
import FinanceCard from './Cards/Finance';
import PresidentCard from './Cards/President';
import RecruitmentCard from './Cards/Recruitment';
import './styles.css';

const styles = theme => ({
  '@global': {},
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  header: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 5,
  },
  home: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      height: 50,
    },
    maxWidth: 200,
  },
});

function Contact(props) {
  const { classes } = props;
  return (
    <Template>
      <Typography
        className={classes.header}
        variant="h2"
        align="center"
        marked="center"
      >
        Contact Us
      </Typography>
      <Typography className={classes.header} variant="h5" align="center">
        Please do not hesitate to contact us. We will get back to you as soon as
        possible!
      </Typography>
      <div className={classes.cards}>
        <PresidentCard />
        <RecruitmentCard />
        <CommunityCard />
        <EducationCard />
        <FinanceCard />
      </div>

      <div className={classes.button}>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.content}
          component={linkProps => (
            <Link {...linkProps} to="/" variant="button" />
          )}
        >
          <span className="join">Home</span>
        </Button>
      </div>
    </Template>
  );
}

export default withStyles(styles)(Contact);
