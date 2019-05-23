const Merchant = require('../model/Merchant.model');

exports.add = (req, res) => {
	console.log('reqbody', req.file);
	if(!req.body.content) {
		return res.status(400).send({
			message: 'Merchant content cannot be empty'
		});
	}
		
	const merchant = new Merchant({
		merchant_displayName: req.body.name,
		merchant_image: req.originalname
	});
	
	merchant.save()
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || 'Some error occured while creating the Merchant.'
		});
	});
};

exports.findAll = (req, res) => {
	Merchant.find()
	.then(merchants => {
		res.send(merchants);
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || 'Some error occured while retriving merchants.'
		});
	});
};