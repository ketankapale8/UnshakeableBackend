import express from 'express';
import {sendNoti} from '../controllers/Notification.js'

const router = express.Router();

router.post('/sendnotifications' , sendNoti)
export default router;