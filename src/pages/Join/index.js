/* eslint-disable lines-between-class-members */
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ProductHero from './JoinHero';
import Template from '../../components/PageTemplate';
import RushSchedule from '../../components/RushSchedule';
import Typography from '../../components/Typography';
import './styles.css';
import Recruitment from '../Contact/Cards/Recruitment';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  '@global': {},
  root: {
    flexGrow: 1,
  },
  Rush: {
    margin: theme.spacing.unit * 5,
  },
  popup: {
    margin: "0 0",
    padding: '0 0',
  },
  button: {
    color: theme.palette.primary.light,
    display: "inline",
    '&:hover': {
      borderBottom: `solid ${theme.palette.secondary.main}`,
      cursor: 'pointer',
    }
  },
  
});

// eslint-disable-next-line react/prefer-stateless-function
class Join extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
        <Template>
          <ProductHero />
          <RushSchedule />
          
          <div className={classes.Rush}>
            <Typography variant="h5">
              Rushing is the first step in everyone's journey to join Sig Tau.
              We invite anyone and everyone to join us at our rush events in the
              schedule above.
            </Typography>
            <br />
            <Typography variant="h5">
              To receive a bid, you must attend at least <i>one</i> rush event.
              After which you will be contacted by our {}
              <Typography
                className={classes.button}
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                variant="h5"
                component="span"
                >
                Director of Recruitment
                
              </Typography>
              {} on how to proceed further
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              We wish you the best of luck in your rush process!
            </Typography>
            <div>
              <Menu
                className={classes.popup}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                MenuListProps={{ disablePadding: true }}
              >
                <Recruitment onClick={this.handleClose} disableMargins="true" />
              </Menu>
            </div>
          </div>
        </Template>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Join);
