/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from './LayoutBody';
import Typography from './Typography';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  image: {
      marginBottom: theme.spacing.unit * 4,
  },
  item: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.primary.main,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    fontSize: '2.5em%',
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
    imageText: {
      fontSize: '1.2',
      position: 'relative',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
      [theme.breakpoints.down('xs')]: {
        fontSize: '.87em',
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit + 4}px`,
      },
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.secondary.light,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});
    const images = [
      {
        url:
          'https://images.unsplash.com/photo-1540205428672-6322279185c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Learning',
        width: '40%',
        text:
          ' He is committed to the pursuit of wisdom and seeks to afford the environment for learning in all his personal and professional endeavors. He knows full well the obligation he has taken and seeks to pass what he has learned to others, knowledge that will rule and mold his thoughts, acts, and deeds. He is focused and goal-oriented. ',
      },
      {
        url:
          'https://images.unsplash.com/photo-1534469589579-86bd01bc003a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        title: 'Integrity',
        width: '22%',
        text:
          'He lives a life of personal integrity perfecting a structure of honor and living by the highest standard that keeps our Brotherhood alive, for, without it, we could not rely on each other or advance our cause. A man with integrity is an honorable man who lives up to promises made – to others and himself. He is confident, ethical, and honest. ',
      },
      {
        url:
          'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Leadership',
        width: '38%',
        text: 'He is compelled by a sacred trust and duty to develop good leaders for the world. He is a man who is humble and makes others feel like they are truly part of something special. He is the defender of good from evil. He is always prepared to lend assistance to a Brother in need. He is courageous, innovative, and strategic.',
      },
      {
        url:
          'https://images.unsplash.com/photo-1452783498187-4b9fed8c046d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1443&q=80',
        title: 'Excellence',
        width: '28%',
        text: 'He consistently strives for superior performance and does not shrink from adversity or lofty goals. He is a man who is dedicated and purposeful who carries an unblemished reputation among men. His actions serve as an example and standard bearer for others. He is curious and bold.',
      },

      {
        url:
          'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Brotherhood',
        width: '41%',
        text: ' He loves his fraternity and seeks to enhance the worth of belonging for others. His actions are emblematic of our shield, a protector of our secrets and our life-long commitment to one another. He holds our ideals in high regard and is forever bonded within the Chain of Honor. He is respectful and dignified and proudly represents the fraternity in all his affairs. He is loyal and proud. ',
      },
      {
        url:
          'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
        title: 'Citizenship',
        width: '31%',
        text: 'He is an outward defender of the common man and cares about more than just himself, demonstrating an unwavering commitment to serving his fraternity, college, and country. He is charitable in the broadest sense of the word, knowing those so richly blessed have an obligation to serve those less fortunate. He is generous and kind. ',
      },
    ];

class Grid extends React.Component {
  state = {
    activeGrid: -1,
  };

  handleChange = (activeGrid) => () => {
    this.setState(state => ({ activeGrid: state.activeGrid == activeGrid ? -1 : activeGrid }
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <LayoutBody
        className={classes.root}
        component="section"
        width="large"
      >
        <div className={classes.item}>
          <img
            className={classes.image}
            src="static/img/crest.png"
            alt="vision"
          />
          <Typography align="center" variant="h4" marked="center">
            The principles of Sigma Tau Gamma
          </Typography>
        </div>
        <div className={classes.images}>
          {images.map((image, i) => (
            <ButtonBase
              onClick={this.handleChange(i)}
              key={image.title}
              className={classes.imageWrapper}
              style={{
                width: image.width,
              }}
            >
              <div
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <div className={classes.imageBackdrop} />

              <div className={classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
              <Zoom in={this.state.activeGrid == i} id="zoom">
                <Paper style={{ height: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                  <Typography
                    component="h1"
                    color="inherit"
                    className={classes.imageText}>{image.text}
                  </Typography>
                </Paper>
              </Zoom>
            </ButtonBase>
          ))}
        </div>
      </LayoutBody>
    );
  }
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);
