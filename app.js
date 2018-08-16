const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products

const app = express();

app.use('/products', product);

var port = 1234;

app.listen(port, () => {
	console.log('Server is up and running at '+port);
});
