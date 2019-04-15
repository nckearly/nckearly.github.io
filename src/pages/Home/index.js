import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import ProductHero from '../../components/HomeHero';
import Values from '../../components/Values';
import { Divider, withStyles } from '@material-ui/core';
import History from '../../components/History';
import Grid from '../../components/Grid';
import Members from '../../components/Members';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer';
import Template from '../../components/PageTemplate';

const styles = theme => ({
    image: {
        marginBottom: theme.spacing.unit * 4,
    },
});


class App extends React.Component {
    render() {
        return (
            <Template>

                            <ProductHero />
                            <Values />
                            <Grid />
                            <Divider class="divider" variant="middle" />
                    <History />

                    <Members />

            </Template>


        );
    }
}

export default withStyles(styles)(App);
