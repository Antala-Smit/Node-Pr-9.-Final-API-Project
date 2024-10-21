const express = require('express');

const routes = express.Router();

const { productAdd, productView, deleteproduct, updateproduct, activeproduct } = require('../controllers/ProductController');

const { verifyToken } = require('../middleware/Auth');

const multer = require('multer');

const storege = multer.diskStorage({});

const fileUpload = multer({ storage: storege }).single("image");

routes.post('/addproduct', verifyToken, fileUpload, productAdd);
routes.get('/viewproduct', verifyToken, productView);
routes.delete('/deleteproduct', verifyToken, deleteproduct);
routes.put('/updateproduct', verifyToken, fileUpload, updateproduct);
routes.put('/activeproduct', verifyToken, activeproduct);

module.exports = routes;