const express = require('express');

const { verifyToken } = require('../middleware/Auth');

const routes = express();

routes.use('/', require('./authRoute'));
routes.use('/category', verifyToken, require('./categoryRoute'));
routes.use('/subcategory', verifyToken, require('./subcategoryRoute'))
routes.use('/product', verifyToken, require('./productRoute'));
routes.use('/cart', verifyToken, require('./cartRout'))

module.exports = routes;