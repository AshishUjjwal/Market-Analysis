import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  current_price: Number,
  market_cap: Number,
  change_24h: Number,
  updated_at: { type: Date, default: Date.now },
});

const Crypto = mongoose.model('Crypto', cryptoSchema);
export default Crypto;
