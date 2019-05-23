import React, { Component } from 'react';

import SharedHeader from './components/SharedHeader';
import SharedDrawer from './components/SharedDrawer';

import MerchantComponent from './components/Merchant/merchant-main';
import BeaconList from './components/beacon-list.component';
import CampaignList from './components/campaign-list.component';
import Default from './components/default';

import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDrawer: '',
			merchantDialog: false,
			beaconDialog: false,
			campaignDialog: false,
		}
	}
	
	onClickDrawer = (drawer) => {
		console.log('clicked', drawer);
		this.setState({
			selectedDrawer: drawer
		})
		
	}
	
	render() {
		const selected = this.state.selectedDrawer;
		return (
			<div className='root'>
			<SharedHeader />
			<SharedDrawer onClickDrawer={this.onClickDrawer}/>
				{(function() {
					switch(selected) {
						case '0':
							return <MerchantComponent />;
						case '1':
							return <BeaconList />;
						case '2':
							return <CampaignList />;
						default:
							return <Default />;
					}
				})()
				}
			
			
			</div>
		);
	}
}

export default App;
