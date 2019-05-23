import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { DropzoneArea } from 'material-ui-dropzone';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import Merchant from './merchant.component';

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

function MerchantList(props) {
	const { classes, onDialogOpen, onDialogClose, onDialogSubmit, onNameChange, onBrandChange, merchantData } = props;
	
	const spacing = '8';
	
	const merchants = [
		{image: 'Cpf.png', title:'CPF'},
		{image: 'Jollibee.png', title:'Jollibee'},
		{image: 'Kfc.png', title:'KFC'},
		{image: 'Mha.png', title:'Ministry of Home Affairs'},
		{image: 'Starbucks.png', title:'Starbucks'},
	]
	
	return (
		<div className={classes.container}>
			<div className={classes.toolbar} />
			<Toolbar className={classes.actionBar}>
				<IconButton onClick={onDialogOpen}>
					<AddCircleIcon />
				</IconButton>
			</Toolbar>
			<Dialog
				open={props.dialogState}
				onClose={onDialogClose}
				aria-labelledby='form-dialog-title'
			>
				
					<DialogTitle id='form-dialog-title'>Add merchant</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please enter merchant's display name and upload their brand image in png format.
						</DialogContentText>
						<TextField
							autoFocus
							margin='dense'
							id='name'
							label='Merchant Name'
							type='text'
							onChange={onNameChange}
							fullWidth
						/>
						<DropzoneArea 
							acceptedFiles={['image/*', 'video/*']}
							onChange={onBrandChange}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={onDialogClose} color='primary'>
						Cancel
						</Button>
						<Button onClick={onDialogSubmit} color='primary'>
						Add
						</Button>
					</DialogActions>
				
			</Dialog>
			<Divider />
			<div className={classes.content}>
				<Grid container className={classes.root} spacing={16}>
					<Grid item xs={12}>
					  <Grid container className={classes.demo} justify="flex-start" spacing={Number(spacing)}>
						{merchantData.map((value, key) => (
						  <Grid key={key} item>
							
							<Merchant image={value.image} title={value.title} />
						  </Grid>
						))}
					  </Grid>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

MerchantList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MerchantList);