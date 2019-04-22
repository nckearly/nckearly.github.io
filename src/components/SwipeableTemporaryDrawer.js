/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Home from '@material-ui/icons/Home';
import Lock from '@material-ui/icons/Lock';
import Contact from '@material-ui/icons/MoveToInbox';
import School from '@material-ui/icons/School';
import Rose from '@material-ui/icons/SpaOutlined';
import Join from 'mdi-material-ui/AccountPlus';
import Outreach from 'mdi-material-ui/HomeGroup';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};
const menu = [
  { text: 'Home', icon: <Home />, path: '/' },
  { text: 'Join Now', icon: <Join />, path: '/Join' },
  { text: 'Contact Us', icon: <Contact />, path: '/Contact' },
  { text: 'Outreach', icon: <Outreach />, path: '/Outreach' },
  { text: 'Alumni', icon: <School />, path: '/Alumni' },
  { text: 'White Rose', icon: <Rose />, path: '/White-Rose' },
];
const memberMenu = [{ text: 'Members', icon: <Lock />, path: '/Members' }];
class SwipeableTemporaryDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {menu.map(listItem => (
            <ListItem
              button
              key={listItem.text}
              component={Link}
              to={listItem.path || '/'}
            >
              <ListItemIcon>{listItem.icon}</ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {memberMenu.map(listItem => (
            <ListItem
              button
              key={listItem.text}
              component={Link}
              to={listItem.path || '/'}
            >
              <ListItemIcon>{listItem.icon}</ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.open}
          onClose={this.props.onToggleDrawer('left', false)}
          onOpen={this.props.onToggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onToggleDrawer('left', false)}
            onKeyDown={this.props.onToggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
