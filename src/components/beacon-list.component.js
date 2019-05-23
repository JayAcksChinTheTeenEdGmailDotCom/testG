import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  container: {
	flexGrow: 1,
  },
  content: {
    padding: theme.spacing.unit * 3,
    
  },
  actionBar: {
	
  },
});

function BeaconList(props) {
	const { classes } = props;
	
	return (
		<div className={classes.container}>
			<div className={classes.toolbar} />
			<Toolbar className={classes.actionBar}>
				<IconButton>
					<AddCircleIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<div className={classes.content}>
				<p>Welcome to Beacon Component!!</p>
			</div>
		</div>
	);
}

BeaconList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeaconList);