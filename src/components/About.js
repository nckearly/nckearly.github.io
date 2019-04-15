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
        marginBottom: theme.spacing.unit * 10,
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
});

function About(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <LayoutBody className={classes.layoutBody} width="large">

                <Grid container spacing={40}>
                    <Grid item xs={12} md={12}>
                        <div className={classes.item}>
                            <img
                                src="static/img/crest.png"
                                alt="crest"
                            />
                            <div className={classes.title}><Typography variant="h2" marked="center" className={classes.title}><strong>Sigma Tau Gamma</strong></Typography></div>
                            <Typography align="center" variant="h6">We are a community of Noble Gentleman that endeavor to benefit our community and improve ourselves as men.</Typography>
                                <br />
                            <Typography align="center" variant="h5">We encompass our 6 principles in all we do: </Typography>
                                <br />
                            <Typography align="center" variant="h6"><strong>LEARNING:</strong> He is committed to the pursuit of wisdom and seeks to afford the environment for learning in all his personal and professional endeavors. He knows full well the obligation he has taken and seeks to pass what he has learned to others, knowledge that will rule and mold his thoughts, acts, and deeds. He is focused and goal-oriented.<Typography />
                                <br />
                            <Typography align="center" variant="h6"><strong>INTEGRITY:</strong> He lives a life of personal integrity perfecting a structure of honor and living by the highest standard that keeps our Brotherhood alive, for, without it, we could not rely on each other or advance our cause. A man with integrity is an honorable man who lives up to promises made – to others and himself. He is confident, ethical, and honest. </Typography>
                                <br />
                            <Typography align="center" variant="h6"><strong>EXCELLENCE:</strong> He consistently strives for superior performance and does not shrink from adversity or lofty goals. He is a man who is dedicated and purposeful who carries an unblemished reputation among men. His actions serve as an example and standard bearer for others. He is curious and bold.</Typography>
                                <br />
                            <Typography align="center" variant="h6"><strong>LEADERSHIP:</strong> He is compelled by a sacred trust and duty to develop good leaders for the world. He is a man who is humble and makes others feel like they are truly part of something special. He is the defender of good from evil. He is always prepared to lend assistance to a Brother in need. He is courageous, innovative, and strategic. </Typography>
                                <br />
                            <Typography align="center" variant="h6"><strong>CITIZENSHIP:</strong> He is an outward defender of the common man and cares about more than just himself, demonstrating an unwavering commitment to serving his fraternity, college, and country. He is charitable in the broadest sense of the word, knowing those so richly blessed have an obligation to serve those less fortunate. He is generous and kind.</Typography>
                                <br />
                            <Typography align="center" variant="h6"><strong>BROTHERHOOD:</strong> He loves his fraternity and seeks to enhance the worth of belonging for others. His actions are emblematic of our shield, a protector of our secrets and our life-long commitment to one another. He holds our ideals in high regard and is forever bonded within the Chain of Honor. He is respectful and dignified and proudly represents the fraternity in all his affairs. He is loyal and proud.</Typography>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </LayoutBody>
        </section>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
