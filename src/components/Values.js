import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from './LayoutBody';
import Typography from './Typography';

const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    layoutBody: {
        marginTop: theme.spacing.unit * 15,
        marginBottom: theme.spacing.unit * 15,
        display: 'flex',
        position: 'relative',
    },
    item: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `0px ${theme.spacing.unit * 5}px`,
    },
    image: {
        height: 55,
    },
    title: {
        marginTop: theme.spacing.unit * 5,
        marginBottom: theme.spacing.unit * 5,
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
    },
});

function Values(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <LayoutBody className={classes.layoutBody} width="large">
                <img
                    src="/static/themes/onepirate/productCurvyLines.png"
                    className={classes.curvyLines}
                    alt="curvy lines"
                />
                <Grid container spacing={40}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.item}>
                            <img
                                className={classes.image}
                                src="/static/img/vision.png"
                                alt="vision"
                            />
                            <Typography variant="h6" className={classes.title}>
                                Our vision
                            </Typography>
                            <Typography variant="h5">
                                {'To build Noble Generations of Men that endeavor to enrich their own lives'}
                                {' and the lives of their Community.'}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.item}>
                            <img
                                className={classes.image}
                                src="/static/img/sheild-outline.png"
                                alt="purpose"
                            />
                            <Typography variant="h6" className={classes.title}>
                                Our Purpose
                            </Typography>
                            <Typography variant="h5">
                                {'To be a Fraternity of Courageous and Noble Gentlemen who Always Endeavor '}
                                {'Forward.'}
                            </Typography>
                        </div>
                    </Grid>


                </Grid>
            </LayoutBody>
        </section>
    );
}

Values.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Values);
