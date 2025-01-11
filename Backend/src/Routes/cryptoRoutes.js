import express from 'express';
import {getAllCryptos, getCryptoStats, getCryptodeviation } from '../Controllers/cryptoController.js';

const router = express.Router();

// Route to fetch all cryptocurrencies
router.get('/', getAllCryptos);

// Define the /stats route
router.get('/stats/:coin', getCryptoStats);

// Define the /deviation route
router.get('/deviation/:coin', getCryptodeviation);



export default router;
