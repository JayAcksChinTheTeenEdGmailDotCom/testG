module.exports = (app) => {
	// const merchants = require('../controllers/merchant.controller');
	const Merchant = require('../model/Merchant.model');
	const multer = require('multer');
	
	
	const storage = multer.diskStorage({
		destination: 'res/img/',
		filename: (req, file, cb) => {
			cb(null, file.originalname);
		}
	});

	const upload = multer({storage: storage});
	//Create a new merchant
	// app.post('/merchant/add', merchants.add);
	// app.post('/merchant/add', upload.single('file'), function (req, res){
		// console.log('file', req.file);
		
	// });
	app.post('/merchant/add', upload.single('file'), function (req, res){
		console.log('file', req.file);
		console.log('body', req.body.name);
		if(!req.body) {
			return res.status(400).send({
				message: 'Merchant content cannot be empty'
			});
		}
			
		const merchant = new Merchant({
			title: req.body.name,
			image: req.file.originalname
		});
		
		merchant.save()
		.then(data => {
			// res.send(data);
			Merchant.find({'_id': merchant._id}).select('image title -_id')
			.then(merchants => {
				res.send(merchants);
			});
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occured while creating the Merchant.'
			});
		});
	});
	// app.post('/merchant/add', [merchants.add, upload.single('file')], function (req, res){
		// console.log('file', req.file);
		
	// })
	//Retrieve all merchants
	app.get('/merchant/list', function (req, res) {
		Merchant.find().select('image title -_id')
		.then(merchants => {
			res.send(merchants);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occured while retriving merchants.'
			});
		});
	});
}