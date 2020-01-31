import { useState, useLayoutEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  loginButton: {
    marginRight: theme.spacing(1)
  }
}));

function Navbar() {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [desktop, setDesktop] = useState(true)
  // const [mq, setMq] = useState(null)
  
  // const resizeListener = mq => event => {
  //   setDesktop(mq.matches)
  // }


  // useLayoutEffect(() => {
  //   console.log('called effect');
  //   const mq = window.matchMedia('(min-width: 600px)')
  //   setDesktop(mq.matches)
  //   window.addEventListener('resize', resizeListener(mq))

  //   return () => window.removeEventListener('resize', resizeListener(mq))
  // })

  const toggleDrawer = isOpen => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setDrawerOpen(isOpen)
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Box display={{ xs: 'block', sm: 'none' }}>
            <IconButton edge="start"
              onClick={toggleDrawer(true)}
              className={classes.menuButton}
              color="inherit" aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" className="navbar-header">
            Welder Education & Training
          </Typography>
          <Box display={{ xs: 'none', sm: 'flex' }}>
            <Button className={classes.loginButton} variant="outlined" color="inherit">
              Login
            </Button>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {sideList('left')}
      </Drawer>
    </>
  )
}

export default Navbar
