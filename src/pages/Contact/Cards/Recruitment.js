import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../../../components/Typography';
import classNames from 'classnames';

const styles = theme => ({
  cardMargin: {
    margin: theme.spacing.unit * 3
  },
  card: {
    display: "inline-block",
    width: "17%",
    minWidth: 300
  },
  title: {
    fontSize: 24,
    marginBottom: 5
  },
  name: {
    fontSize: 19,
    marginBottom: 12
  },
  contact: {
    display: "flex",
    margin: theme.spacing.unit * 1
  },
  contactText: {
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2
  },
  contactEmail: {
    textDecoration: "none",
    color: "black",
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2,
    "&:hover": {
      cursor: "pointer",
      borderBottom: `solid 2px ${theme.palette.secondary.main}`
    }
  }
});

function EducationCard(props) {
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
          Director of Recruitment
        </Typography>
        <Typography className={classes.name}>Ty Guerra</Typography>
        <Typography className={classes.contact}>
          <MailIcon />
          <a
            className={classes.contactEmail}
            href="mailto:tyguerra@rams.colostate.edu"
          >
            tyguerra@rams.colostate.edu
          </a>
        </Typography>
        <Typography className={classes.contact}>
          <PhoneIcon />
          <span className={classes.contactText}>(303) 905-5459</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

EducationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EducationCard);
