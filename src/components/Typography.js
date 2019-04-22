import { withStyles } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';
import { capitalize } from '@material-ui/core/utils/helpers';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  markedH1Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing.unit}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH2Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing.unit}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing.unit}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing.unit}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Left: {
    height: 3,
    width: 80,
    display: 'block',
    marginTop: theme.spacing.unit * 1.3,
    backgroundColor: theme.palette.common.white,
  },
  markedH5Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing.unit}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing.unit / 2,
    background: 'currentColor',
  },
  markedH5Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing.unit / 2,
    backgroundColor: theme.palette.secondary.main,
  },
});

const headlineMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
};

function Typography(props) {
  const { children, classes, marked, variant, ...other } = props;

  return (
    <MuiTypography
      headlineMapping={headlineMapping}
      variant={variant}
      {...other}
    >
      {children}
      {marked ? (
        <span
          className={
            classes[`marked${capitalize(variant) + capitalize(marked)}`]
          }
        />
      ) : null}
    </MuiTypography>
  );
}

Typography.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  marked: PropTypes.oneOf([false, 'center', 'left']),
  variant: PropTypes.string,
};

Typography.defaultProps = {
  marked: false,
};

export default withStyles(styles)(Typography);
