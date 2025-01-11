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
    });

    const cryptoData = response.data;

    for (const coin of cryptoData) {
      await Crypto.findOneAndUpdate(
        { name: coin.name },
        {
          name: coin.name,
          symbol: coin.symbol,
          current_price: coin.current_price,
          market_cap: coin.market_cap,
          change_24h: coin.price_change_percentage_24h,
          updated_at: new Date(),
        },
        { upsert: true, new: true }
      );
    }

    console.log('Crypto data updated successfully');
  } catch (err) {
    console.error('Error fetching crypto data:', err.message);
  }
};

export default fetchCryptoData;
