import Crypto from '../Models/Crypto.js';
import axios from 'axios';

const COINS = ['bitcoin', 'matic-network', 'ethereum'];

// Controller to fetch all cryptocurrencies
export const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find({});
    res.status(200).json(cryptos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

// Controller to fetch a cryptocurrency by name
export const getCryptoByName = async (req, res) => {
  try {
    const { name } = req.params;
    const crypto = await Crypto.findOne({ name: new RegExp(`^${name}$`, 'i') });
    if (crypto) {
      res.status(200).json(crypto);
    } else {
      res.status(404).json({ error: 'Cryptocurrency not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export const getCryptoStats = async (req, res) => {
  try {
    const { coin } = req.params;
    console.log(`object ${coin}`);

    // Validate if the coin is one of the allowed coins
    if (!coin || !COINS.includes(coin.toLowerCase())) {
      return res.status(400).json({ error: 'Invalid coin name. Valid coins are bitcoin, matic-network, ethereum.' });
    }

    const { COINGECKO_API_BASE } = process.env;
    const response = await axios.get(`${COINGECKO_API_BASE}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        ids: coin.toLowerCase(),
      },
      headers: {
        'x-cg-demo-api-key': 'CG-4GD2AwXybhHk265RFdYHwySy',
      },
    });

    const coinData = response.data[0];

    console.log(`CoinData: `, coinData);

    const stats = {
      price: coinData.current_price,
      marketCap: coinData.market_cap,
      "24hChange": coinData.price_change_percentage_24h,
    };

    res.json(stats);
  } catch (err) {
    console.error('Error fetching crypto data:', err.message);
    res.status(500).json({ error: 'Failed to fetch cryptocurrency data' });
  }
};


export const getCryptodeviation = async (req, res) => {
    try {
        const { coin } = req.params;

        // Validate if the coin is one of the allowed coins
        if (!coin || !COINS.includes(coin.toLowerCase())) {
            return res.status(400).json({ error: 'Invalid coin name. Valid coins are bitcoin, matic-network, ethereum.' });
        }

        // Fetch current price of the coin
        const { COINGECKO_API_BASE } = process.env;
        const response = await axios.get(`${COINGECKO_API_BASE}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                ids: coin.toLowerCase(),
            },
            headers: {
                'x-cg-demo-api-key': 'CG-4GD2AwXybhHk265RFdYHwySy',
            },
        });

        const coinData = response.data[0];

        // For the sake of simplicity, let's assume we're comparing the current price to a stored previous price.
        // You could replace this logic with data from a database or cache system.

        // Example: Previous price (this would come from your DB in a real-world case)
        const previousPrice = 35000; // For illustration, replace with actual data

        // Calculate the deviation (percentage change)
        const deviation = ((coinData.current_price - previousPrice) / previousPrice) * 100;

        const result = {
            currentPrice: coinData.current_price,
            previousPrice,
            deviation: deviation.toFixed(2), // Returning the deviation in percentage
        };

        res.json(result);
    } catch (err) {
        console.error('Error fetching crypto data:', err.message);
        res.status(500).json({ error: 'Failed to fetch cryptocurrency data' });
    }
};
