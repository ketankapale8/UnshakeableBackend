import express from 'express';
import { CreateOrder } from '../controllers/orderController';
const router = express.Router();

router.post('/neworder', CreateOrder);

export default router;