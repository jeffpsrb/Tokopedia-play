import express from 'express';
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.route('/').get(productController.getProducts);

export default router;
