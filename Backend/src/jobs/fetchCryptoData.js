import axios from 'axios';
import Crypto from '../Models/Crypto.js';

const COINS = ['bitcoin', 'matic-network', 'ethereum'];

const fetchCryptoData = async () => {
  try {
    const { COINGECKO_API_BASE } = process.env;
    const response = await axios.get(`${COINGECKO_API_BASE}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        ids: COINS.join(','),
      },
      headers: {
        'x-cg-demo-api-key': 'CG-4GD2AwXybhHk265RFdYHwySy',
      },
    });

    // console.log('Response Data:', response.data);

    // If no data is returned, log a message and exit
    if (!response.data || response.data.length === 0) {
      console.log('No cryptocurrency data returned from API');
      return;
    }

    const cryptoData = response.data;

    // Use findOneAndUpdate for each coin in cryptoData
    const updates = cryptoData.map(async (coin) => {
      try {
        // This will update the document if it exists, or insert it if not
        const result = await Crypto.findOneAndUpdate(
          { name: coin.name }, // Match on coin name
          {
            name: coin.name,
            symbol: coin.symbol,
            current_price: coin.current_price,
            market_cap: coin.market_cap,
            change_24h: coin.price_change_percentage_24h,
            updated_at: new Date(),
          },
          { upsert: true, new: true } // Insert new if not found, return the updated document
        );

        // console.log(`Updated or inserted: ${coin.name}`, result);
        return result;
      } catch (error) {
        console.error(`Error updating ${coin.name}:`, error.message);
      }
    });

    // Wait for all update operations to finish
    await Promise.all(updates);
    console.log('Crypto data processed successfully');
  } catch (err) {
    console.error('Error fetching crypto data:', err.message);
  }
};

export default fetchCryptoData;
