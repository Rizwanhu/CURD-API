import express from 'express';
import { getProducts, createProduct } from '../controllers/products.js';
import auth from '../middleware/middleware.js';

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', auth, createProduct);

export default router; 