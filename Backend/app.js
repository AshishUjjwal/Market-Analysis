
import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cron from 'node-cron';
import fetchCryptoData from './src/jobs/fetchCryptoData.js';


configDotenv();
const app = express();

// CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: process.env.CORS_ORIGIN,  // e.g., 'http://localhost:3000' or 'https://myfrontend.com'
    allowedHeaders: ['Content-Type','Origin', 'Authorization'], // Allowed headers
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
}));

app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());

// routes import
import cryptoRoutes from './src/Routes/cryptoRoutes.js'

// Routes

app.use('/api/cryptos', cryptoRoutes);
// http://localhost:8000/api/cryptos/*

// Schedule the job to run every 2 hours
cron.schedule('0 */2 * * *', async () => {
    console.log('Running crypto data fetch job');
    await fetchCryptoData();
  });

export { app };