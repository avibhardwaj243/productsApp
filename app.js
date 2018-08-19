const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');

const dev_db_url = 'mongodb://root:root_123@ds121262.mlab.com:21262/productstutorial';
//mongodb://root:root@123@ds123619.mlab.com:23619/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
//console.log(mongoDB);return false;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

var port = 1234;

app.listen(port, () => {
	console.log('Server is up and running at '+port);
});
