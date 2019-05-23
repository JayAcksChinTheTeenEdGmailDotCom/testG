const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
// const eRoutes = express.Router();
const multer = require('multer');


let Todo= require('./model/todo.model');
let Merchant = require('./model/Merchant.model');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client/build')));
app.use(express.static('res/img'));

const mongoCon = 'mongodb+srv://beaconmi:ue4iKcrn2gzu0CnE@cluster0-0zh2g.gcp.mongodb.net/test?retryWrites=true'
//mongoose.connect('mongodb+srv://beaconmi:ue4iKcrn2gzu0CnE@cluster0-0zh2g.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://beacommi:ue4iKcrn2gzu0CnE@cluster0-0zh2g.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
	console.log("MongoDB database connection established successfully");
})

require('./routes/merchant.route.js')(app);
// const storage = multer.diskStorage({
	// destination: 'res/img/',
	// filename: (req, file, cb) => {
		// cb(null, file.originalname);
	// }
// });

// const upload = multer({storage: storage});
// const upload = multer({dest: 'res/img/'});

// app.post('/merchant/add', upload.single('file'), function (req, res){
	// console.log('file', req.file);
	
// })

// app.get('/merchant/list', function(req, res) {
	// //res.send('merchant list');
// })
// app.post('/merchant/add', function(req, res){
	// console.log('request',req.name);
	// upload(req, res, function(err){
		// if(err instanceof multer.MulterError) {
			// return handleError
		// } else if (err) {
			// return handleError
		// }
		// return res.status(200).send(req.file)
	// })
// });

// eRoutes.post(
	// '/merchant/add', {
		// upload(req, res, (err) => {
			// console.log('brand file',req.file);
		// });
	// }
// );

// eRoutes.route('/').get(function(req, res) {
	// console.log("someone accessed");
	// Todo.find(function(err, todos) {
		// if(err) {
			// console.log(err);
		// } else {
			
			// res.json(todos);
		// }
	// });
// });

//app.use('/todos', eRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});