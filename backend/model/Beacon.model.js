const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BeaconSchema = new Schema({
	beacon_uid: {
		type: String
	},
    beacon_displayName: {
        type: String
    },
    beacon_merchant: {
        type: String
    },
    
});

module.exports = mongoose.model('Beacon', BeaconSchema);