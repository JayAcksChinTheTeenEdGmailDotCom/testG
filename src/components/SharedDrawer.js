import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PeopleIcon from '@material-ui/icons/People';
import LocationIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

function SharedDrawer(props) {
	const { classes } = props;
	
	return(
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
			  paper: classes.drawerPaper,
			}}
		>
        <div className={classes.toolbar} />
		
        <List>
		  <ListItem button key='0' onClick={()=> props.onClickDrawer('0')}>
			<ListItemIcon><PeopleIcon /></ListItemIcon>
			<ListItemText primary='Merchant'></ListItemText>
		  </ListItem>
		  <ListItem button key='1' onClick={()=> props.onClickDrawer('1')}>
			<ListItemIcon><LocationIcon /></ListItemIcon>
			<ListItemText primary='Beacon'></ListItemText>
		  </ListItem>
		  <ListItem button key='2' onClick={()=> props.onClickDrawer('2')}>
			<ListItemIcon><FolderIcon /></ListItemIcon>
			<ListItemText primary='Campaign'></ListItemText>
		  </ListItem>
        </List>
		
        </Drawer>
	);
}


SharedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SharedDrawer);