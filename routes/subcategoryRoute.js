const express = require('express');

const routes = express.Router();

const { subcategoryAdd, subcategoryView, deletesubcategory, updatesubcategory, activesubcategory } = require('../controllers/subcategorycontroller');

const { verifyToken } = require('../middleware/Auth');

routes.post('/addsubcategory', verifyToken, subcategoryAdd);
routes.get('/viewsubcategory', verifyToken, subcategoryView);
routes.delete('/deletesubcategory', verifyToken, deletesubcategory);
routes.put('/updatesubcategory', verifyToken, updatesubcategory);
routes.put('/activesubcategory', verifyToken, activesubcategory);


module.exports = routes;