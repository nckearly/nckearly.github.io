// Calendar managed here
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable max-lines-per-function */
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CalendarIcon from '@material-ui/icons/DateRange';
import React from 'react';
import Button from '../../components/Button';
import Template from '../../components/PageTemplate';
import ProductHero from '../Members/MembersHero';
import './styles.css';

const styles = theme => ({
  content: {
    margin: theme.spacing.unit * 4,
  },
  body: {
    margin: theme.spacing.unit * 5,
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
    margin: `${theme.spacing.unit * 2}px auto`,
    display: 'flex',
    justifyContent: 'center',
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
    // width: '80%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
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

class App extends React.Component {
  componentDidMount() {
    this.hasher();
  }

  componentWillUnmount() {
    document.getElementById('Inffuse-Loader');
  }

  handleReload = () => {
    window.location.reload();
    this.hasher();
  };

    // un comment this line for the members page to be hashed.
    // this will disable the ability to refresh the page but will increase security
  hasher = () => {
     // window.history.replaceState(window.history.state, 'test', `/${Math.random().toString(36).substring(7)}`);
  };

  render() {
    const { classes } = this.props;
    return (
      <Template>
        <ProductHero />
        <div className={classes.calendar}>
          <div
            className="app-placeholder-calendar"
            // calendar ID. If you need to change to another account, go to embedd and replace the data ID here.
            // calendar link: https://app.eventscalendar.co/projects/proj_xbURFseO7YEAe1dZvQs8U
            // Username: sigtaucolostate@gmail.com 
            // PW: 1Esotes1
          data-id="proj_xbURFseO7YEAe1dZvQs8U"
        >
            {' '}
            <div className={classes.reload}>
              <IconButton onClick={this.handleReload}>
                <CalendarIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={classes.links}>
          <Button
            className={classes.linkButtons}
            href="https://login.omegafi.com/cas/login?org=&service=https%3A%2F%2Fmy.omegafi.com%2Fapps%2Fmyomegafi%2Flogin%2Flogin_post.php%3FUserName%3D%2A%2A%2A%26Password%3D%2A%2A%2A%26org%3D&ra=1"
            component="a"
            target="_new"
          >
            OmegaFi
          </Button>
          <Button
            className={classes.linkButtons}
            href="https://drive.google.com/drive/folders/1xHI5JjxOEUAVZj0SBwSqv51vZzD5XAw9?usp=sharing"
            component="a"
            target="_new"
          >
            Documents
          </Button>
          <Button
            className={classes.linkButtons}
            href="https://ramlink.campuslabs.com/engage/organization/SigTau"
            component="a"
            target="_new"
          >
            Ramlink
          </Button>
          <Button
            className={classes.linkButtons}
            href="https://fsl.colostate.edu/"
            component="a"
            target="_new"
          >
            CSU OFSL
          </Button>
          <Button
            className={classes.linkButtons}
            href="https://chapterbuilder.com/"
            component="a"
            target="_new"
          >
            Chapter Builder
          </Button>
          <Button
            className={classes.linkButtons}
            href="https://fs3.formsite.com/ukQxLU/form2/index.html"
            component="a"
            target="_new"
          >
            Absense Form
          </Button>
          <Button
            className={classes.linkButtons}
            href="https://fs3.formsite.com/ukQxLU/form1/index.html"
            component="a"
            target="_new"
          >
            Service Hours
          </Button>
        </div>
      </Template>
    );
  }
}

export default withStyles(styles)(App);
