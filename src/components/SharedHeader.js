import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
});

function SharedHeader(props) {
	const { classes } = props;
	
	return(
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					BeaconMi
				</Typography>
			</Toolbar>
		</AppBar>
	);
}


SharedHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SharedHeader);