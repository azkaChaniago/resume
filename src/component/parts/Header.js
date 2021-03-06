import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const SwipeDrawer = () => {
  let classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (side, open) => e => {
    if(e  && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  }

  const sideList = side => {
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>
        <List>
          {[ 'About', 'Qualifications', 'Portfolios', 'Education Background', 'Working Experiences' ].map((text, index) => (
            <ListItem
              button
              key='start'>
                <ListItemIcon>{ index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
                <ListItemIcon primary={text}/>
            </ListItem>
          ))}
        </List>
    </div>
  }
}

const Header = () => {
  let classes = useStyles();  

  return (
    <div className={classes.root}>
      <AppBar
        position="static">
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'>
                <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              className={classes.title}>
                Welcome to my Static Web Page
            </Typography>
          </Toolbar>
      </AppBar>
      <SwipeDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}>
          {sideList('left')}
      </SwipeDrawer>
    </div>
  );
}


export default Header;