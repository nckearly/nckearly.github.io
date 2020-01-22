/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import { withStyles } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Template from '../../components/PageTemplate';
import Typography from '../../components/Typography';
import ProductHero from './RoseHero';

// update the current white rose here
const current = 'Elizabeth McNamer';
const firstName = 'Elizabeth';
const image = 'static/img/White_Rose.jpg';
// eslint-disable-next-line max-len
const flavuhText =
  // eslint-disable-next-line max-len
  "Elizabeth is the very first White Rose. She was chosen based off of her dedication to seeing our chapter grow and become successful. She has been an avid supporter during all of our events and has made it a point to help in any way that she can.We will always be thankful for her contributions to our chapter and can't wait to see what she does next! ";
const tileData = [
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8775_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 8,
    rows: 3,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8900_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 13,
    rows: 3,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8902_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 10,
    rows: 3,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8896_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 9,
    rows: 3,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8918_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 10,
    rows: 3,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8921_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 12,
    rows: 4,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8913_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 25,
    rows: 4,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8927_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 13,
    rows: 4,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8929_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 15,
    rows: 3,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8932_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 18,
    rows: 3,
  },
  {
    img:
      'https://www.sigtauzetasigma.org/uploads/1/1/7/1/117191759/img-8931_orig.jpg',
    title: 'Image',
    author: 'author',
    cols: 17,
    rows: 3,
  },
];

const styles = theme => ({
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
    margin: theme.spacing.unit * 5,
  },
  content: {
    margin: theme.spacing.unit * 3,
  },
  paper: {
    margin: '0 auto',
    width: '25%',
    [theme.breakpoints.down('xs')]: {
      width: '80% !important',
    },
  },
  rose: {
    display: 'flex',
    padding: 0,
    borderRadius: '4px',
    width: '100%',
    marginBottom: theme.spacing.unit * 1,
  },
  flavor: {
    margin: theme.spacing.unit * 5,
  },
  grid: {
    minWidth: 715,
    display: 'flex',
    margin: theme.spacing.unit * 5,
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  gridList: {
    width: '80%',
  },
  text: {
    margin: theme.spacing.units * 2,
  },
});

class WhiteRose extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Template>
        <div>
          <div />
          <ProductHero />
          <div className={classes.header}>
            <Typography variant="h2" align="center" marked="center">
              White Rose
            </Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="h5">
              Current Rose: <strong>{current}</strong>
            </Typography>
          </div>
          <Paper className={classes.paper}>
            <img className={classes.rose} src={image} alt="white-rose" />
          </Paper>
          <Typography variant="h5" className={classes.text}>
            {current}'s contribution to the betterment of Sig Tau has been
            recognized by electing her the <em>White Rose.</em>
            <br />
            As the White Rose, {firstName} is recognized as an honorary member
            of the Fraternity, and an annual banquet is held in her honor.
          </Typography>
          <Typography className={classes.flavor} variant="h5">
            {flavuhText}
          </Typography>
          <div className={classes.grid}>
            <GridList cellHeight={100} className={classes.gridList} cols={50}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols} rows={tile.rows}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </Template>
    );
  }
}

export default withStyles(styles)(WhiteRose);
