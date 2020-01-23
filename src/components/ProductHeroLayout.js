/* eslint-disable react/prop-types */
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import LayoutBody from './LayoutBody';

// eslint-disable-next-line max-lines-per-function
const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  arrowDown: {
    position: 'absolute',
    marginTop: theme.spacing.unit * 10,
    bottom: theme.spacing.unit * 2,
  },
  img: {
    position: 'relative',
    left: '13%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      left: '0%',
      right: '20%',
    },
  },
  img_container: {
    marginTop: '5%',
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '95%',
    },
  },
});

function ProductHeroLayout(props) {
  const {
    backgroundClassName,
    children,
    classes,
    header,
    width,
    override,
  } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="full">
        <div
          className={classes.img_container}
          // class="colostate"
        >
          {!override && (
            <img
              className={!header && classes.img}
              // the header image will at default be sig tau colostate. Use the "header" override to use youre own
              src={header || 'static/img/colostatex3.png'}
              alt="wonder"
              // width will at default be 60%em for the header, use the "width" override for your own width
              width={width || '60%em'}
            />
          )}
        </div>
        {children}
        <div className={classes.backdrop} />
        <div className={classNames(classes.background, backgroundClassName)} />
      </LayoutBody>
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHeroLayout);
