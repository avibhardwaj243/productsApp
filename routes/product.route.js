const express = require('express');
const router = express.Router();

//Require the Controller
const product_controller = require('../controllers/product.controller');

//a simple test url to check
router.get('/test', product_controller.test);

//CRUD
router.post('/create', product_controller.product_create);//C
router.get('/:id', product_controller.product_details);//R
router.put('/:id/update', product_controller.product_update);//U
router.delete('/:id/delete', product_controller.product_delete);//D


module.exports = router;
