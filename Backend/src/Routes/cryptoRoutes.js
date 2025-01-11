import express from 'express';
import { getAllCryptos, getCryptoByName } from '../Controllers/cryptoController.js';

const router = express.Router();

// Route to fetch all cryptocurrencies
router.get('/', getAllCryptos);

// Route to fetch cryptocurrency by name
router.get('/:name', getCryptoByName);

export default router;
