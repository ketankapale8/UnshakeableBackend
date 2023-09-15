import express from 'express';
import { CreateOrder } from '../controllers/orderController.js';
const router = express.Router();

router.post('/neworder', CreateOrder);

export default router;