import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ProductHero from './AlumniHero';
import Template from '../../components/PageTemplate';
import Typography from '../../components/Typography';
import './styles.css';

const styles = theme => ({
  '@global': {},
  root: {
    flexGrow: 1,
  },
  Rush: {
    margin: theme.spacing.unit * 5,
  },

});

// eslint-disable-next-line react/prefer-stateless-function
class Join extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Template>
          <ProductHero />
          
          <div className={classes.Rush}>
            <Typography variant="h5">
              Sig Tau at Colorado State, is still new and as a result, has very few alumni. We look forward to expanding our program as more members graduate.
            </Typography>
            
          </div>
        </Template>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Join);
