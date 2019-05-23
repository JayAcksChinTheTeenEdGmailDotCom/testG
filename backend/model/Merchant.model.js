const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MerchantSchema = new Schema({
	
    title: {
        type: String
    },
    image: {
        type: String
    },
    
}, {
	timestamps: true
});

module.exports = mongoose.model('Merchant', MerchantSchema);