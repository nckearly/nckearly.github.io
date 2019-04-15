/* eslint-disable react/prop-types */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import { Link } from 'react-router-dom';


// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        color: "inherit",
        marginLeft: -12,
        marginRight: 20,
        '&:hover': {
            
            backgroundColor: theme.palette.primary.light,
        }
    },
    logo: {
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center',
        }
    },
    homeLogo: {
                '&:hover': {
                    backgroundColor: theme.palette.primary.main,
        },
    },
            memberButton: {
                '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                }
            }
});


class Header extends React.Component {
    state = {
        left: false,
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <SwipeableTemporaryDrawer open={this.state.left} onToggleDrawer={this.toggleDrawer} />
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
onClick={this.toggleDrawer('left', true)}
                            className={classes.menuButton}
                            aria-label="Menu"
                        >

                            <MenuIcon />
                        </IconButton>
                        <div className={classes.logo}>
                            <Button
                                className={classes.homeLogo}
                            component={linkProps => (
                                <Link {...linkProps} to="/" variant="button" />
                                )}
                                align="center">

                            <Typography type="title">

                                <img
                                    className={classes.headerImage}
                                    src="static/img/logo.svg"
                                    alt="Sig Tau"
                                    width="125"

                                    />
                            </Typography>
                        </Button>
                        </div>
                        <Button
                            className={classes.memberButton}
                            color="inherit"
                            component={linkProps => (
                                <Link {...linkProps} to="/Members" variant="button" />
                            )}>Members</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
