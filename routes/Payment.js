import express from 'express';
import { ProcessPayment } from "../controllers/paymentController.js";

// const stripe = require("stripe")(process.env.STRIPE_SECRET);

const router = express.Router();

router.post('/processpayments', ProcessPayment);

export default router;
