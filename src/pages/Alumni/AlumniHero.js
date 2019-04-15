import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../components/Button';
import ProductHeroLayout from '../../components/ProductHeroLayout';
import Typography from '../../components/Typography';

const backgroundImage =
  "https://cdn.stocksnap.io/img-thumbs/960w/3PQLBTZQPC.jpg";

const styles = theme => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '0f07af', // Average color of the background image.
        backgroundPosition: 'center',
    },
    button: {
        minWidth: 200,
    },
    more: {
        marginTop: theme.spacing.unit * 2,
    },
    h2: {
        color: 'white',
        fontFamily: 'Bitter',
        fontWeight: 'bold',
       // fontStyle: 'italic',
    },
    spacer: {
        marginTop: theme.spacing.unit * 25,
    }
});

function AlumniHero(props) {
    const { classes } = props;

    return (
        <div className="Hero">
            <ProductHeroLayout
                backgroundClassName={classes.background}
            >
                <div className={classes.header}>
                {/* Increase the network loading priority of the background image. */}
                <img style={{ display: 'none' }} src={backgroundImage} alt="" />
                </div>

                {
                    <React.Fragment>
                        <div>
                            <br />
                            <Typography className={classes.h2} align="center" variant="h2" marked="center">
                                Alumni
              </Typography>
                        </div>
                        <div className={classes.spacer}/>
                 
                    </React.Fragment>
                }

            </ProductHeroLayout>
        </div>
    );
}

AlumniHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlumniHero);
