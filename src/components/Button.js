//  this is custom button file, use these overrides to reamin consistant

import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = theme => ({
  root: {
    textAlign: 'center',
    borderRadius: 4,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    fontSize: theme.typography.pxToRem(18),
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none',
    },
  },
  sizeSmall: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: `${theme.spacing.unit * 3 - 3}px ${theme.spacing.unit * 6}px`,
    fontSize: theme.typography.pxToRem(16),
  },
  sizeTiny: {
    margin: '0, 0',
    padding: '0.1%',
    fontSize: theme.typography.pxToRem(13),
  },
});

function Button(props) {
  return <MuiButton {...props} />;
}

export default withStyles(styles)(Button);
