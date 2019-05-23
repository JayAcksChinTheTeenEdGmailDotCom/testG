const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CampaignSchema = new Schema({
	campaign_uid: {
		type: String
	},
    campaign_displayName: {
        type: String
    },
	campaign_type: {
		type: String
	},
	campaign_content:{
		type: String
	},
    campaign_merchant: {
        type: String
    },
    campaign_beacon: {
        type: String
    },
});

module.exports = mongoose.model('Campaign', CampaignSchema);