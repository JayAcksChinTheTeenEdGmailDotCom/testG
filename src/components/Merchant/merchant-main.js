import React, { Component } from 'react';
import axios from 'axios';

import MerchantList from './merchant-list.component';

class MerchantComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			merchantDialog: false,
			merchantName: '',
			merchantBrand: null,
			merchantData: [],
		}
		this.onMerchantNameChange = this.onMerchantNameChange.bind(this);
		this.onMerchantBrandChange = this.onMerchantBrandChange.bind(this);
		
	}
	
	componentDidMount() {
		//This is where i get data from DB
		axios.get('http://localhost:4000/merchant/list')
		.then((res) => {
			console.log('GET req: response', res);
			this.setState({
				merchantData: res.data
			})
		})
		.catch((error) => {
			console.log('GET req: error', error);
		});
	}
	
	onMerchantNameChange(event) {
		console.log('name change', event.target.value)
		this.setState({
			merchantName: event.target.value,
		});
	}
	
	onMerchantBrandChange = (brand) => {
		console.log('brand change', brand)
		this.setState({
			merchantBrand: brand,
		});
	}
	
	onDialogOpen = () => {
		console.log('dialog open');
		this.setState({
			merchantDialog: !this.state.merchantDialog,
		});
		
	}
	
	onDialogClose = () => {
		console.log('dialog close');
		this.setState({
			merchantDialog: !this.state.merchantDialog,
		});
	}
	
	onDialogSubmit = (e) => {
		e.preventDefault();
		console.log('dialog submit.');
		
		const formData = new FormData();
		formData.append('file', this.state.merchantBrand[0]);
		formData.append('name', this.state.merchantName);
		
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		};
		
		axios.post("http://localhost:4000/merchant/add", formData, config)
		.then((res) => {
			console.log('POST req: response', res.data[0]);
			this.forceUpdate();
			let curMerchantData = this.state.merchantData;
			curMerchantData.push(res.data[0]);
			this.setState({
				merchantData: curMerchantData,
			});
		})
		.catch((error) => {
			console.log('POST req: error',error);
		});
		
		this.setState({
			merchantDialog: !this.state.merchantDialog,
		});
	}
	
	render() {
		
		return(
			<div>
				<MerchantList 
					onDialogOpen={this.onDialogOpen} 
					onDialogClose={this.onDialogClose} 
					onDialogSubmit={this.onDialogSubmit} 
					dialogState={this.state.merchantDialog}
					onNameChange={(event) => this.onMerchantNameChange(event)}
					onBrandChange={this.onMerchantBrandChange}
					merchantData={this.state.merchantData}
				/>
			</div>
		)
	}
}

export default MerchantComponent;