import express from 'express';
import { CreateOrder, findOrder } from '../controllers/orderController.js';
const router = express.Router();

router.post('/neworder', CreateOrder);
router.get('/myorder', findOrder)

export default router;