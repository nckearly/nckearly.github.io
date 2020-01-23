// this page manages the log in page, see the "Loader" page for the actual members page.
/* eslint-disable no-unused-vars */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Template from '../../components/PageTemplate';
import Typography from '../../components/Typography';
import ProductHero from './MembersHero';
import './styles.css';

const styles = theme => ({
  content: {
    margin: theme.spacing.unit * 4,
  },
  body: {
    margin: theme.spacing.unit * 5,
  },
  button: {
    marginTop: 20,
    height: 40,
    width: 100,
    marginLeft: 20,
    display: 'flex',
  },
  header: {
    marginBottom: theme.spacing.unit * 5,
  },
  password: {
    display: 'flex',
    justifyContent: 'center',
  },
  TextField: {
    width: 500,
  },
  locked: {
    marginBottom: theme.spacing.unit * 3,
  },
  reload: {
    position: 'absolute',
    left: '49%',
    top: '18%',
    margin: `${theme.spacing.unit * 5}px auto`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  calendar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: `${theme.spacing.unit * 5}px auto`,
    maxWidth: 1600,
    zIndex: 1,
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkButtons: {
    minWidth: 200,
    color: 'white',
    margin: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 2}px`,
    backgroundColor: theme.palette.primary.main,
    border: `solid 2px ${theme.palette.primary.main}`,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});

const pass = 'EatSaltines';

class App extends React.Component {
  state = { isValidated: false, input: '' };

  updateHandler = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = () => {
    if (pass === this.state.input) {
      this.setState({ isValidated: true });
    }
  };

  render() {
    const { isValidated, input } = this.state;
    const { classes } = this.props;
    if (isValidated) {
      this.props.history.push('/Loader/');
    }
    return (
      <Template>
        <ProductHero />
        <div className={classes.locked}>
          <Typography variant="h5" align="center">
            This page is restricted to members only, please enter the password
            below to continue
          </Typography>
        </div>
        <div className={classes.password}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="standard-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={input}
              // eslint-disable-next-line react/jsx-handler-names
              onChange={this.updateHandler}
            />
            <Button
              type="submit"
              label="login"
              color="secondary"
              variant="contained"
              size="medium"
              className={classes.button}
            >
              Login
            </Button>
          </form>
          <br />
        </div>
      </Template>
    );
  }
}

export default withRouter(withStyles(styles)(App));
