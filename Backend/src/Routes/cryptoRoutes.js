import express from 'express';
import {getCryptoStats, getCryptodeviation } from '../Controllers/cryptoController.js';

const router = express.Router();

// Route to fetch all cryptocurrencies
// router.get('/', getAllCryptos);

// Define the /stats route
router.get('/stats/:coin', getCryptoStats);
router.get('/deviation/:coin', getCryptodeviation);

// Route to fetch cryptocurrency by name
// router.get('/:name', getCryptoByName);

export default router;
