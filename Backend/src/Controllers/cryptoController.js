import Crypto from '../Models/Crypto.js';

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
