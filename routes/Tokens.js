import express from 'express';
import {getAllTokens} from '../controllers/Tokens.js'

const router = express.Router();

router.post('/gettokens' , getAllTokens)
export default router;