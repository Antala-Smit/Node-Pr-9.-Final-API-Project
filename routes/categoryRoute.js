const express = require('express');

const routes = express.Router();

const { addcategory, viewcategory, deletecategory, updatecategory, activecategory} = require('../controllers/CategoryController');

const { verifyToken } = require('../middleware/Auth');

routes.post('/addcategory', verifyToken, addcategory);
routes.get('/viewcategory', verifyToken, viewcategory);
routes.delete('/deletecategory', verifyToken, deletecategory);
routes.put('/updatecategory', verifyToken, updatecategory);
routes.put('/activecategory', verifyToken, activecategory);

module.exports = routes;