import express from 'express';
import { CreateService } from '../controllers/serviceController';

const router = express.Router();

router.post('/createservice', CreateService);

export default router;