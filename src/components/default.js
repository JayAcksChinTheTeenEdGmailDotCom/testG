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

function TodosList(props) {
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
				<p>Welcome to my testing ground.</p>
				<p>Currently, only Merchant has Add feature. You can add text and image.</p>
				<p>Next iteration will include Update and Delete feature. These feature will extend to Merchant and Campaign components.</p>
				<p>Future iteration will auto-retrieve beacon devices from Kontakt.io Panel</p>
				<p></p>
			</div>
		</div>
	);
}

TodosList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodosList);