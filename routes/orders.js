import express from 'express';
import { createOrder, getUserOrders } from '../controllers/orders.js';
import auth from '../middleware/middleware.js';

const router = express.Router();

router.post('/orders', auth, createOrder);
router.get('/orders', auth, getUserOrders);

export default router; 