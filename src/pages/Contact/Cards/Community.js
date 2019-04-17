import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../../../components/Typography';

const styles = theme => ({
  cardMargin: {
    margin: theme.spacing.unit * 3,
  },
  card: {
    display: 'inline-block',
    width: '17%',
    minWidth: 325,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
  },
  name: {
    fontSize: 19,
    marginBottom: 12,
  },
  contact: {
    display: 'flex',
    margin: theme.spacing.unit * 1,
  },
  contactText: {
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2,
  },
  contactEmail: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2,
    '&:hover': {
      cursor: 'pointer',
      borderBottom: `solid 2px ${theme.palette.secondary.main}`,
    },
  },
  contactTel: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2,
    '&:hover': {
      cursor: 'pointer',
      borderBottom: `solid 2px ${theme.palette.secondary.main}`,
    },
  },
});

function CommunityCard(props) {
  const { classes, disableMargins } = props;

  return (
    <Card
      className={classNames(
        classes.card,
        !disableMargins && classes.cardMargin,
      )}
    >
      <CardContent>
        <Typography
          className={classes.title}
          align="left"
          variant="h5"
          marked="left"
        >
          Director of Community Engagement
        </Typography>
        <Typography className={classes.name}>Tyler Franks</Typography>
        <Typography className={classes.contact}>
          <MailIcon />
          <a
            className={classes.contactEmail}
            href="mailto:Tylermfranks10@gmail.com"
          >
            Tylermfranks10@gmail.com
          </a>
        </Typography>
        <Typography className={classes.contact}>
          <PhoneIcon />
          <a className={classes.contactTel} href="tel:7024390592">
            (702) 439-0592
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}

CommunityCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityCard);
